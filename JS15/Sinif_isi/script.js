for (let i = 1; i <=50; i++) {
    if(i%5===0){
        console.log(i);
    }else{
        console.log("Ədəd 5-ə qalıqsız bölünmür");
    }
}

let hedef = 100;
let hazirdakiZaretka = 0;
let yigmaq = 10;

while (hazirdakiZaretka<=hedef){
    console.log("Batareya " +hazirdakiZaretka+ " % ");
    hazirdakiZaretka+=yigmaq;
}

let qiymetler = [100, 200, 50, 80];
for (let i = 0; i < 4; i++) {
    let endirimliQiymetler = qiymetler[i]*0.9;
    console.log(endirimliQiymetler)
}

let velosipedQiymeti = 350;
let yigilmisPul = 0;
let hergunGelenPul = 20;
let gun = 0;

while (yigilmisPul<velosipedQiymeti){
    yigilmisPul+=hergunGelenPul;
    gun++;
}
console.log(gun);

let şagirdBalları = [45, 80, 32, 90, 65, 50];
for (let i = 0; i < şagirdBalları.length; i++) {
    if(şagirdBalları[i]>50){
        console.log("Şagird imtahanı keçdi "+şagirdBalları[i])
    }else{
        console.log("Şagird imtahanı keçmədi "+şagirdBalları[i])
    }
}