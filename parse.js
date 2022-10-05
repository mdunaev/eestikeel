
import fetch from 'node-fetch';
import Crawler from "crawler";
import fs  from 'fs';

const url = "https://www.err.ee/api/category/latest/109?from=26.09.2000&to=27.09.2018&limit=500";

const response = await fetch(url);
const data = await response.json();
let i = 0;

var c = new Crawler({
    maxConnections : 1,
    rateLimit: 110,
    callback : function (error, res, done) {
        if (error) {
            console.log(error);
        } else {
            var $ = res.$;
            
            if (!$) return;

            fs.appendFileSync("result.txt", $(".text").text());
            console.log("parsed - ",i, res.request.uri.path);
            i++;
        }
        done();
    }
});



data.forEach(element => {
    const url = element.url;
    // c.queue(url);
});

