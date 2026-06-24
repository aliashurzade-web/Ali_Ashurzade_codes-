let eded1 = 12; 
let eded2 = 14;

if(eded1 > 10 && eded2 > 10){
    console.log("Hər iki ədəd böyükdür!");
}

let derece = prompt("Sizin olduğunuz yerdə hava neçə dərəcədir?");

if(derece > 20){
    console.log("Gəzintiyə çıxmaq olar!")
}else{
    console.log("Çöldə gün yoxdur")
}

let eded = 14;
if(eded > 0 && eded%2==0){
    console.log("Bu ədəd həm cüt həmdə müsbətdir!")
}else(
    console.log("Bu ədəd ya cütdür amma mənfidir yada təkdir amma müsbətdir.")
)

let yaş = +prompt("Sizin neçə yaşınz var?")
let bilet = prompt("Sizdə bilet var?")
if(yaş > 18 && bilet=="var"){
    console.log("Siz keçə bilərsiniz")
}else(
    console.log("Siz keçə bilməzsiniz")
)

let şifrə = prompt("Şifrənizi daxil edin.")
let tekrarşifrə = prompt("Şifrənizi yenidən daxil edin.")
if(şifrə == tekrarşifrə && şifrə.length > 5){
    console.log("Şifrə düzgün yaradıldı")
}