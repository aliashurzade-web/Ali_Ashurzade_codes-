let myButton = document.querySelector('button');

myButton.addEventListener('click', function(){
    window.location.reload();
});



let h1 = document.querySelector('h1');
let defaultText = h1.innerText;

h1.addEventListener('click', function(){
    if(h1.innerText===defaultText){
        h1.innerText = "Alma";
    }else{
        h1.innerText = defaultText;
    }
});

let myBtn = document.querySelector('h2');
let cavab = "Tunar";

myBtn.addEventListener('click', function(){
    let sual = prompt("Elinin en yaxin dosdu kimdir?")

    if(sual===cavab){
        window.location.href='./secret.html';
    }else{
        alert("SEHV CAVAB!!");
    }
});


let h4 = document.querySelectorAll('h4');
let def = h4.innerText;
h4.forEach((deyisen)=>{
    deyisen.addEventListener('click', function(event){
        event.target.style.backgroundColor = "Green";
        event.target.innerText = "Secildi";
    })
});

// h4.forEach((geriqaytar)=>{
//     geriqaytar.addEventListener('click', function(qaytar){
//         qaytar.target.style.backgroundColor = "White";
//         qaytar.target.innerText = def;
//     })
// })