let elementler = ["A", "B"];

elementler.unshift("X", "Y");
elementler.push("Z", "W");

console.log(elementler);


let ballar = [45, 80, 55, 90, 72, 30];

ballar.forEach((bal) => {
    console.log("Bal: " + bal);
});


let mehsullar = ["Köynək", "Şalvar", "Papaq"];
let köhnəQiymət = [10, 20, 30];

let yeniQiymət = [];

köhnəQiymət.forEach(qiymet => {
    yeniQiymət.push(qiymet * 3);
});

console.log(yeniQiymət);


let maşınlar = ["BMW", "Mercedes", "Lamborgini", "Aston Martin"];
maşınlar.unshift("Range Rover");

console.log(maşınlar);


let meyvə = ["alça", "qarpız", "yemiş", "çiyələk"];
let silinən = meyvə.shift();

console.log(silinən);


let meyvələr = ["alma", "armud", "banan"];

meyvələr.push("nar");
meyvələr.pop();

console.log(meyvələr);


let reqemler = [43, 57, 79];

reqemler.unshift(41);
reqemler.shift();

console.log(reqemler);


let meyveler = ["mandalin", "ərik", "gilas"];

meyveler.forEach((meyve) => {
    console.log(meyve.toUpperCase());
});


let array = ["A", "B", "C"];

array.unshift("R");
array.push("Q");
array.shift();
array.pop();
array.push("Z");

console.log(array);


let rengler = ["Qırmızı", "Yaşıl", "Mavi", "Qəhvəyi"];

rengler.push("Çəhrayı");

rengler.shift();

rengler.forEach((reng) => {
    console.log(reng);
});
