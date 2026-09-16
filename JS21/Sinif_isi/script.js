function yasi(){
    let tevellud = new Date("2012-02-14");
    let indi = new Date();
    let spanYasi = document.getElementById("yasi");
    let yas = indi.getFullYear() - tevellud.getFullYear();
    spanYasi.innerText = "Mənim yaşım: " + yas;
}

yasi();

let saniye = 0;

function sayğac(){
    let spanSayac = document.getElementById("sayac");
    saniye++;
    spanSayac.innerText = saniye;
}

setInterval(sayğac, 1000); 


