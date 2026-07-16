let numbers = [12, 5, 8, -3, 19, -8, 2];
let menfiEdedler = numbers.find(el => el<0);
console.log(menfiEdedler);

let books = ["Xəmsə", "Kitabi-Dədə Qorqud", "Azərbaycan nağılları", "Ölüb gedənlər", "Cırtdan"];
let elifbaSira = books.sort((a,b) => a.localeCompare(b,'az'));
console.log(elifbaSira)

let prices = [45, 120, 8, 99, 350, 15, 75];
let boyukdenKiciye = [...prices].sort((a,b) => b-a);
console.log(boyukdenKiciye)