let istifadeciAdi = prompt("Adiniz nedir?");
localStorage.setItem("istifadeciAdi", "Senin adin:  "+istifadeciAdi);


let myArray = ["Azerbaycan","Pakistan","Amerika","Rusiya","Ukraniya"];
localStorage.setItem("olkeler", JSON.stringify(myArray));