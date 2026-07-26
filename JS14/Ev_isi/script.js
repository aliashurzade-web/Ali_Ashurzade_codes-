for (let i = 10; i >= 1; i--){
    console.log(i);
}

let massiv = [];
for (let i = 1; i <15; i++){
    massiv.push(i)
}
console.log(massiv);

let array = [2, 5, 7, 10, 4];
for (let i = 0; i < array.length; i++) {
    console.log(array[i] * 3);
}

let cəm = 0;
let i = 1;
while (i < 10) {
    cəm = cəm + i;
    i = i + 1;
    console.log(cəm);
}

let b = 1;
while (b<10){
    console.log(b);
    b = b + 1;
}

let eded = +prompt("Eded daxil edin.")
let c = 0;
while (c < eded){
    console.log(c);
    c = c + 1;
}

let ededler = [2,566,1,2];

for (let i = 0; i < ededler.length; i++){
    console.log(ededler[i] * 2);
}

let komputerinQiymeti = 1200;
let gunlukGelir = 15;
let yığılmışPul = 0;
let günSayı = 0;
while (yığılmışPul<komputerinQiymeti){
    yığılmışPul+=gunlukGelir;
    günSayı++;
}
console.log(günSayı);


let cutTek = [2,3,4,5,6,7,8,9,0];
for (let i = 0; i < cutTek.length; i++){
    if (cutTek[i] % 2 === 0){
        console.log("Cut eded: " + cutTek[i]);
    }else{
        console.log("Tek eded: " + cutTek[i]);
    }
}


let hedef = 150;
let hergunQacdigi = 10;
let qacdigiMesafe = 0;
let gunSayi = 0;
while (qacdigiMesafe<hedef){
    qacdigiMesafe+=hergunQacdigi;
    gunSayi++;
}
console.log(gunSayi + 1);
