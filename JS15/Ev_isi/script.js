let bakınHəcmi = 100;
let dolmus = 0;
let gunSayi = 0;
while (dolmus<bakınHəcmi){
    gunSayi++;
    if(gunSayi%3===0){
        dolmus+=0;
    }else{
        dolmus+=20;
    }
}
console.log(gunSayi);

let bataryaHecmi = 100;
let saat = 0;
let doldurulmus = 0;

while (doldurulmus<bataryaHecmi){
    saat++;
    if(saat%2===0){
        doldurulmus+=0;
    }else{
        doldurulmus+=25;
    }
}
console.log(saat);

let meymununHedefi = 80;
let yigdigiGun = 0;
let yigdigi = 0;
while (yigdigi<meymununHedefi){
    yigdigiGun++;
    if(yigdigiGun%5===0){
        yigdigi-=5;
    }else{
        yigdigi+=10;
    }
}
console.log(yigdigiGun);

let ilbizinHedefi = 30;
let ilbizinCixdigi = 0;
let gunSayı = 0;

while (ilbizinCixdigi<ilbizinHedefi){
    gunSayı++;
    ilbizinCixdigi+=5;
    if(ilbizinCixdigi<ilbizinHedefi){
        ilbizinCixdigi-=2;
    }
}
console.log(gunSayı);

for (let i = 1; i <= 5; i++) {
    let ulduz = "";

    for (let j = 1; j <= i; j++) {
        ulduz += "*";
    }

    console.log(ulduz);
}
