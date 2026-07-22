let numbers = [14, 25, 8, -3, 19, -12, 5];
let ilkMenfi = numbers.find(el => el<0);
console.log(ilkMenfi)

let fruits = ["Üzüm", "Alma", "Çiyələk", "Banan", "Ərik", "Şaftalı"];
let elifbaSira = fruits.sort((a,b) => a.localeCompare(b,'az'));
console.log(elifbaSira)

let pageCounts = [120, 450, 85, 320, 600, 210];
[...pageCounts].sort((a,b) => b-a);
console.log(pageCounts);

let validTickets = ["VIP100", "STD205", "ECO55", "BAKU2026"];

function checkTicket() {
    let ticket = document.getElementById("ticket").value;

    let found = validTickets.find(item => item === ticket);

    if (found) {
        alert("Bilet keçərlidir! Tədbirə daxil ola bilərsiniz.");
    } else {
        alert("Təəssüf, keçərsiz bilet kodu!");
    }
}

let işcilər = [
    ["Leyla", 1500],
    ["Tural", 2200],
    ["Kamran", 800],
    ["Günel", 1900],
    ["Orxan", 1100]
];

işcilər.sort(function(a, b) {
    return a[1] - b[1];
});

console.log(işcilər);

function işçiniTap() {
    let adı = document.getElementById("işçiAdı").value;

    let işçi = işcilər.find(item => item[0] === adı);

    if (işçi) {
        alert("İşçi tapıldı! Maaşı: " + işçi[1] + " AZN");
    } else {
        alert("Təəssüf, belə bir işçi tapılmadı.");
    }
}
