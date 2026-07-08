function topla(a, b) {
    return a + b;
}

console.log(topla(69, 96));



function kvadrat(a) {
    return a * a;
}

console.log(kvadrat(7));



function yaşıYoxla() {
    let yas = Number(prompt("Yaşınızı daxil edin:"));

    if (yas >= 18) {
        return "Giriş icazəlidir";
    } else {
        return "Giriş qadağandır";
    }
}

console.log(yaşıYoxla());


function cütvetək(eded) {
    if (eded % 2 === 0) {
        return "Cüt"; 
    } else {
        return "Tək"; 
    }
}

let netice = cütvetək(92);
let netice2 = cütvetək(91);


console.log(netice); 
console.log(netice2); 
// 5

function orta(a, b, c) {
    let cem = a + b + c;
    let ortalama = cem / 3;
    return ortalama; 
}

let cavab = orta(24, 42, 39);

console.log("cavab"); 


function yoxla() {
    let eded = Number(prompt("Ədəd daxil edin:"));

    if (eded > 0) {
        return "Müsbət";
    } else if (eded < 0) {
        return "Mənfi";
    } else {
        return "Sıfır";
    }
}

let ədəd = Number(prompt("Bir ədəd daxil edin:"));
console.log(yoxla(ədəd));

