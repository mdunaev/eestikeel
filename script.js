import fs from 'fs';
var path = process.cwd();
var buffer = fs.readFileSync(path + "/source.txt");

const text = buffer.toString().replace(/(\r\n|\n|\r)/gm, " ")
    .replace(/ +(?= )/g,'').replaceAll('."', '').replaceAll('-', '')
    .replaceAll("	", "")
    .replaceAll(" ", "").toLowerCase();

const textNormalised = text.replaceAll(",", "").replaceAll(".", "")
    .replaceAll("?", "").replaceAll("!", "");

const rating1 = {};

textNormalised.split(" ").forEach(element => {
    if (rating1[element]) {
        rating1[element]++;
    } else {
        rating1[element] = 1;
    }
});

const result1 = Object.entries(rating1).sort((a, b) => b[1] - a[1]).slice(0, 300).map((v, i) => i + " - " + v[0]).join("\n");
// console.log(result1);

// const textNormalised2 = text.split(".")
//     .join(" .").split(",").join(" .")
//     .split("?").join(" .").split("!").join(" .")
//     .replaceAll('."', "").replaceAll('  ', " ").split(" . ")
//     .map(v => v.split(" ").length > 1 ? v : false).filter(Boolean)
//     .flatMap(v => 
//         { 
//             const sentArr = v.split(" ");
//             return sentArr.map((v, i) => {
//                 const vNext = sentArr[i+1];
//                 if (!vNext) return false;
//                 return v + " " + vNext
//             }).filter(Boolean)
//         }
//     );

// const rating2 = {};
// textNormalised2.forEach(element => {
//     if(rating2[element]) {
//         rating2[element]++;
//     } else {
//         rating2[element] = 1;
//     }
// });

// const result2 = Object.entries(rating2).sort((a, b) => b[1] - a[1]).slice(0, 200).map((v, i) => i + " - " + v[0]).join("\n");
// console.log(result2);


const textNormalised3 = text.split(".")
    .join(" .").split(",").join(" .")
    .split("?").join(" .").split("!").join(" .")
    .replaceAll('."', "").replaceAll('  ', " ").split(" . ").map(v => v.split(" ").length > 1 ? v : false).filter(Boolean)
    .flatMap(v => 
        { 
            const sentArr = v.split(" ");
            return sentArr.map((v, i) => {
                const vNext = sentArr[i+1];
                const vNext2 = sentArr[i+2];
                if (!vNext) return false;
                if (!vNext2) return false;
                return v + " " + vNext + " " + vNext2
            }).filter(Boolean)
        }
    );

const rating3 = {};
textNormalised3.forEach(element => {
    if(rating3[element]) {
        rating3[element]++;
    } else {
        rating3[element] = 1;
    }
});

const result3 = Object.entries(rating3).sort((a, b) => b[1] - a[1]).slice(0, 200).map((v, i) => i + " - " + v[0]).join("\n");
console.log(result3);

// const textNormalised4 = text.split(". ").filter(element => element.split(" ").length > 2).filter(element => element.split(" ").length < 6);

// const rating4 = {};
// textNormalised4.forEach(element => {
//     if(rating4[element]) {
//         rating4[element]++;
//     } else {
//         rating4[element] = 1;
//     }
// });

// const result4 = Object.entries(rating4).sort((a, b) => b[1] - a[1]).slice(0, 100).map((v, i) => i + " " + v[0]).join("\n");
// console.log(result4);