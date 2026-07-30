let ədədlər = [-5, 8, 3, 10, -2, 14, 7];
let yeniMassiv = [];

for (let ədəd of ədədlər) {
    if (ədəd > 0 && ədəd % 2 === 0) {
        yeniMassiv.push(ədəd);
    }
}

console.log(yeniMassiv);

let say = 1;
let cəm = 0;

while (say <= 100) {
    if (say > 50) {
        break;
    }

    cəm += say;
    say++;
}

console.log(cəm);

let adlar = ["Əli", "Aysel", "Murad", "Nigar"];
let cümlə = "";

for (let ad of adlar) {
    cümlə += ad + " ";
}

console.log(cümlə);

let heyvanlar = ["pişik", "it", "quş", "at"];

for (let heyvan of heyvanlar) {
    console.log(heyvan.toUpperCase());
}

let adlar2 = ["Vüqar", "Aysel", "Murad", "Əli", "Nigar"];

for (let ad of adlar2) {
    if (ad === "Əli") {
        break;
    }

    console.log(ad);
}

for (let say = 0; say <= 5; say++) {
    if (say === 3) {
        continue;
    }

    console.log(say);
}

for (let say = 1; say <= 10; say++) {
    if (say === 7) {
        break;
    }

    console.log(say);
}
