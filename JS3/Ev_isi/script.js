let yas = prompt("Sizin neçə yaşınız var?");
if(yas > 18){
    console.log("Sən boyüksən");
}else(
    console.log("Sən hələ balacasan")
);

let reqem = prompt("Bir ədəd seçin");
if(reqem > 0){
    console.log("Ədədiniz müsbətdir");
}else(
    console.log("Ədədiniz mənfidir")
);
if(reqem == 0){
    console.log("Ədədiniz sıfırdır");
}

let şifrə = prompt("Şifrəni yazın");
if(şifrə == 12345){
    console.log("Daxil oldunuz");
}else(
    console.log("Daxil olmadınız(Şifrə yalnışdır)")
);

let hava = prompt("Hava neçə dərəcədir");
if(hava > 25){
    console.log("Hava istidir");
}
if(hava > 15 && hava <25){
    console.log("Hava normaldır");
}
if(hava < 15){
    console.log("Hava soyuqdur");
}

let ədəd = prompt("Ədədi daxil edin");
if(ədəd%2==0){
    console.log("Ədədiniz cütdür");
}else(
    console.log("Ədədiniz təkdir")
);