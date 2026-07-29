let scores = [45, 60, 80, 30, 95];

for (const el of scores) {
     console.log(el+10);
}

for (let i = 0; i <=10; i++) {
    if(i%2 !==0){
        console.log(i);
    }else{
        console.log("ədəd cütdür");
    }
}


let fruits = ["Alma", "Banan", "Qarpız", "Gilas", "Yemiş"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "Qarpız" || fruits[i] == "Yemiş") {
        continue;
    }
    console.log(fruits[i]);
}

let prices = [15, 25, 40, 0, 50, 80];
for (let i = 0; i < prices.length; i++) {
    if(prices[i]!==0){
        console.log("Xətalı qiymət tapıldı, proses dayandırıldı");
        break;
    }else{
        console.log(prices);
    }
}