let reqemler = [2, 4, 6, 8, 10];
let hasil = reqemler.reduce((a,b)=>a*b);
console.log(hasil)

let ededler = [-10, -5, -2, -8];
let menfi = ededler.every((el)=>(el)<0);
console.log(menfi)

let soz = "K o m p ü t e r";
let adArray = soz.split("");
let ayrilmisSoz = adArray.join("");
console.log(ayrilmisSoz);

let qutu = [1, 2, 3, 4, 5];
let tersQutu = qutu.reverse().join();
console.log(tersQutu);

let sifre = "98765";
let tersSifre = sifre.split("").reverse().join();
let menfiEdedVarmi = [...tersSifre].every((el)=>(el)<0);
console.log(tersSifre);
console.log(menfiEdedVarmi);