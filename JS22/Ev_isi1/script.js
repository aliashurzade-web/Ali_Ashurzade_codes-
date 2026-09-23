let myH1 = document.querySelector("h1");
let mySpan = document.querySelector("span");
let correct = 0;

let answer1 = +prompt("1-ci sual: 5 + 3 neçə edir?");
let answer2 = +prompt("2-ci sual: 2 * 6 neçə edir?");
let answer3 = +prompt("3-cü sual: 10 - 4 neçə edir?");

if (answer1 === 8) {
    correct++;
}
if (answer2 === 12) {
    correct++;
}
if (answer3 === 6) {
    correct++;
}

mySpan.innerText = correct;

if (correct === 3) {
    myH1.style.color = "green";
} if (correct === 2){
    myH1.style.color = "yellow";
} if (correct === 1){
    myH1.style.color = "red";
}