let soyad = prompt("Soyadınız nədir?");
let ad = prompt("Adınız nədir?");
console.log(soyad+" " +ad);

let şəhər = prompt("Siz hansı şəhərdə qalırınız?");
console.log("Siz " +şəhər+ " şəhərində qalırsınız");

let rəng = prompt("Sizin ən çox xoşladığınız rəng hansı rəngdir?");
console.log(rəng+ " rəngi həqiqətəndə çox gözəldir");

let fərq = prompt("Birinci ədəd");
let fərq2 = prompt("İkinci ədəd");
console.log(Number(fərq)-Number(fərq2));

let düzbucaqlı = prompt("Düzbucaqlının eni");
let düzbucaqlı2 = prompt("Düzbucaqlının uzunluğu");
console.log(Number(düzbucaqlı)*Number(düzbucaqlı2));

let qalıq = prompt("Bölünən");
let qalıq2 = prompt("Bölən");
console.log(Number(qalıq)/Number(qalıq2));

let yaş = prompt("Sizin neçə yaşınız var?");
let təqaüd = prompt("Sizin ölkədə təqaüd-ə çıxmaq yaşı neçədir?");
console.log(Number(təqaüd)-Number(yaş));

let əsr = prompt("Neçənci ildir?");
console.log(Number(əsr)/100);

let doğulmaq = prompt("Sizin neçə yaşınız var?");
let məktəb = prompt("İndi neçənci ildir?");
let bitirmək = 17;
console.log(Number(bitirmək)-Number(doğulmaq)+Number(məktəb))

let sistemAciqdir = true;
let sistemAciqdirString = String(sistemAciqdir);
console.log(typeof sistemAciqdirString);     

let mehsulQiymeti = "150";
let mehsulQiymetiNumber = Number(mehsulQiymeti);
console.log(Number(mehsulQiymeti)+20);

let gun = "25";
let gunNumber = Number(gun);
console.log(Number(gun))

let üçbucaq = prompt("Birinci Tərəf")
let üçbucaq2 = prompt("İkinci Tərəf")
let üçbucaq3 = prompt("Üçüncü Tərəf")
console.log(Number(üçbucaq)+Number(üçbucaq2)+Number(üçbucaq3))

let mağaza = prompt("Birinci məhsul")
let mağaza2 = prompt("Ikinci məhsul")
let mağaza3 = prompt("Üçüncü məhsul")
console.log(Number(mağaza)+Number(mağaza2)+Number(mağaza3))

let İmtahan = prompt("Az dilindən neçə bal almısınız?")
let İmtahan2 = prompt("Riyaziyyatdan neçə bal almısınız?")
let İmtahan3 = prompt("İngilis dilindən neçə bal almısınız?")
console.log(Number(İmtahan)/3+Number(İmtahan2)/3+Number(İmtahan3)/3)
