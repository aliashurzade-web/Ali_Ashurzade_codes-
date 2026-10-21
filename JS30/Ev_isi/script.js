const movsum = prompt("Cari ilin fəslini daxil edin (məsələn: Payız):");

if (movsum) {
  sessionStorage.setItem("movsum", movsum);
}

const oxunanMovsum = sessionStorage.getItem("movsum");
console.log("sessionStorage-dən oxunan mövsüm:", oxunanMovsum);


const kitablar = [
  "1984 - George Orwell",
  "Kürk Mantolu Madonna - Sabahattin Ali",
  "Qraf Monte-Kristo - Alexandre Dumas"
];


localStorage.setItem("kitablarim", JSON.stringify(kitablar));

const oxunanMumat = localStorage.getItem("kitablarim");
const kitablarArray = JSON.parse(oxunanMumat);


console.log("--- Kitablarım ---");
kitablarArray.forEach((kitab, index) => {
  console.log(`${index + 1}. ${kitab}`);
});


const istifadeciAdi = localStorage.getItem("istifadeci");

if (!istifadeciAdi) {
  const ad = prompt("Adınızı daxil edin:");
  
  if (ad) {
    localStorage.setItem("istifadeci", ad);
    console.log(`Xoş gəldiniz, ${ad}!`);
  }
} else {
  console.log(`Xoş gəldin yenidən, ${istifadeciAdi}!`);
}
