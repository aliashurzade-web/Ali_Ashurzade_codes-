let uşaqlar = ["Əli", "Tunar"];
uşaqlar.push("Hüseyn");
console.log(uşaqlar);

let Fudbolistlər = ["Ronaldo", "Neymar", "Messi"];
let silinen = Fudbolistlər.pop();
console.log(silinən);
console.log(Fudbolistlər);

let maşınlar = ["Toyota", "Lamborghini", "Chevrolet"];
maşınlar.forEach(function(element){
    console.log(element);
});

let ededler = [5, 10, 15, 20];
function cem() {
    console.log(ededler[0] + ededler[1] + ededler[2] + ededler[3]);
}
cem();