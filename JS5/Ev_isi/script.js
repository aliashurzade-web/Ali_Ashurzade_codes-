let hava = prompt("Hava neçə dərəcədir?");
if(hava < 0){
    console.log("Hava şaxtalıdır");
}else{
    console.log("Hava mülayimdir");
}

let rəng = prompt("Hər hansı bir rəng seçin")
if(rəng !== ""){
    console.log("Seçdiyiniz rəng: " +rəng);
}else{
    console.log("Siz heçbir rəng seçmədiniz");
}

let bal = prompt("Siz imtahandan neçə bal topladınız?");
if(bal > 50 || bal == 50 ){
    console.log("Siz imtahandan keçdiniz");
}else{
    console.log("Siz kəsildiniz");
}

let parol = prompt("Parol nədir");
if(parol == "qwerty"){
    console.log("Daxil oldunuz")
}else{
    console.log("Parol yanlışdır")
}

let rəqəm = prompt("Hər hansı bir rəqəm seçin");
if (Number(rəqəm) === 5 && typeof rəqəm !== "string"){
    console.log("Tam olaraq 5 daxil etdiniz");
}else if(rəqəm == 5){
    console.log("Dəyər 5-dir, amma tipi fərqlidir");
}else{
    console.log("Tamamilə fərqli bir şeydir");
}


let şəhər =prompt("Şəhər adını daxil et:");
let yas = Number(prompt("Yaşınızı daxil edin:"));

if (şəhər == "Bakı" && yas > 16) {
    console.log("Tədbirə dəvətlisiniz!");
}else{
    console.log("Şərtlər ödənmir");
}

let meyve = prompt("Bir meyvə adı daxil edin:");

if(meyve == "Alma" || meyve == "Armud") {
    console.log("Bu meyvə bağımızda var");
}else{
    console.log("Bu meyvə bizdə yoxdur");
}

let kupon = prompt("Kupon kodunu daxil edin:");
let qiymet = Number(prompt("Məhsulun qiymətini daxil edin:"));

if(kupon == "Endirim" && qiymet > 100) {
    console.log("20% endirim tətbiq olundu");
}else{
    console.log("Endirim mümkün olmadı");
}

let gun = prompt("Həftənin gününü daxil edin:");
gun == "Şənbə" || gun == "Bazar"?  console.log("İstirahət günü "): gun == "" ? console.log("Gün daxil edilməyib "):  console.log("İş günüdür ");

let balans = Number(prompt("Balansınızı daxil edin:"));

balans >= 50? console.log("Balans kifayətdir ✅"): balans == 0?  console.log("Balansınız tamamilə boşdur ⛔"): console.log("Balans azdır, artırın ⚠️");