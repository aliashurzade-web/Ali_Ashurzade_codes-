let ədədlər = [7, 11, 15, 8, 19, 22, 3];
let ilkCüt = ədədlər.find(num => num%2 === 0);
console.log(ilkCüt);

let şəhərlər = ["Şəki", "Bakı", "Gəncə", "Sumqayıt", "Lənkəran", "Özbəkistan"];
şəhərlər.sort();
console.log(şəhərlər);

let yaşlar = [12, 15, 17, 21, 14, 30, 10];
let ilkUyğun = yaşlar.find(yas => yas >= 18);
console.log(ilkUyğun);

let məhsulQiymətləri = [250, 15, 80, 1200, 45, 90, 5];
[...məhsulQiymətləri].sort((a,b) => a-b);
console.log(məhsulQiymətləri);

let sözlər = ["kitab", "kompüter", "ev", "proqramlaşdırma", "dəftər"];
sözlər.sort((a, b) => a.length - b.length);
console.log(sözlər);

let aktivPromoKodları = ["SUMMER20", "NEWYEAR", "XEZRI10", "BAKU2026"];

function promoKoduYoxla(){
    let promoDaxil = document.getElementById("promocode").value; 
    
    let promoTapıldı = aktivPromoKodları.find(promo => promo === promoDaxil);

    if(promoTapıldı){
        alert("Promo kod aktivləşdirildi!")
    }
    else{
        alert("Belə promo kod yoxdur!")
    }
}

let tələbələr = [["Aysel", 75], ["Kənan", 92], ["Nigar", 45], ["Emin", 88], ["Fərid", 60]];

let sıralanmışTələbələr = [...tələbələr].sort((a, b) => b[1] - a[1]);
console.log("Balına görə azalan sırayla tələbələr:", sıralanmışTələbələr);

document.getElementById("searchBtn").addEventListener("click", function () {
  let daxilEdilmişAd = document.getElementById("nameInput").value.trim();
  let nəticə = document.getElementById("result2");

  let tapıldı = tələbələr.find(tələbə => tələbə[0].toLowerCase() === daxilEdilmişAd.toLowerCase());

  if (tapıldı) {
    nəticə.textContent = "Tələbə tapıldı! Balı " + tapıldı[1];
  } else {
    nəticə.textContent = "Təəssüf, belə bir tələbə tapılmadı.";
  }
});

let istifadəçilər = [["Ayan", [10, 20, 30]], ["Murad", [50, 40]], ["Nəzrin", [5, 10, 15, 20]]];
let sıralanmışİstifadəçilər = [...istifadəçilər].sort((a, b) => {
  let A = a[1].reduce((cəm, bal) => cəm + bal, 0);
  let B = b[1].reduce((cəm, bal) => cəm + bal, 0);
  return B - A;
});
console.log("Ümumi xala görə azalan sırayla istifadəçilər:", sıralanmışİstifadəçilər);


 let aktivPinKodları = ["1111", "5555", "9876", "1234"];
 
    document.getElementById("checkBtn2").addEventListener("click", function () {
      let daxilEdilmişPin = document.getElementById("pinInput").value.trim();
      let nəticə = document.getElementById("result3");
 
      let tapıldı = aktivPinKodları.find(pin => pin === daxilEdilmişPin);
 
      if (tapıldı) {
        nəticə.textContent = "Giriş uğurludur!";
      } else {
        nəticə.textContent = "Yalnış pin-kod!";
      }
    });

let məhsullar = [["Telefon", 1200], ["Noutbuk", 2500], ["Qulaqlıq", 150], ["Klaviatura", 80], ["Siçan", 45]];
 
    let sıralanmışMəhsullar = [...məhsullar].sort((a, b) => a[1] - b[1]);
    console.log("Qiymətinə görə sıralanmış məhsullar:", sıralanmışMəhsullar);
 
    let siyahı = document.getElementById("productList");
    sıralanmışMəhsullar.forEach(məhsul => {
      let li = document.createElement("li");
      li.textContent = məhsul[0] + " - " + məhsul[1] + " AZN";    
      siyahı.appendChild(li);
    });
 
    document.getElementById("searchBtn3").addEventListener("click", function () {
      let daxilEdilmişAd = document.getElementById("productInput").value.trim();
      let nəticəElementi = document.getElementById("result4");
 
      let tapıldı = məhsullar.find(məhsul => məhsul[0].toLowerCase() === daxilEdilmişAd.toLowerCase());
 
      if (tapıldı) {
        nəticəElementi.textContent = "Məhsul tapıldı! Qiyməti:" + tapıldı[1] + "AZN";
      } else {
        nəticəElementi.textContent = "Təəssüf, belə bir məhsul tapılmadı.";
      }
    });