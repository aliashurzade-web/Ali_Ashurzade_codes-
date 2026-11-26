// Keçid düymələri
let qeydiyyatKartı = document.querySelector("#qeydiyyatKarti");
let girisKarti = document.querySelector("#girişKartı");
let girişəKeçBtn = document.querySelector("#qeydiyyatBtn");
let qeydiyyataKeçBtn = document.querySelector("#signUpBtn");

// Ekranlar arası keçid (Qeydiyyat -> Giriş)
girişəKeçBtn.addEventListener("click", (event) => {
    event.preventDefault();
    qeydiyyatKartı.classList.add("d-none");
    girisKarti.classList.remove("d-none");
});

// Giriş ekranından qeydiyyat ekranına qayıtmaq (Giriş -> Qeydiyyat)
qeydiyyataKeçBtn.addEventListener("click", (event) => {
    event.preventDefault();
    girisKarti.classList.add("d-none");
    qeydiyyatKartı.classList.remove("d-none");
});

// Şifrə göstər funksiyası
let sifreniGosder = document.querySelector("#şifrəGösdər");
let loginSifre = document.querySelector("#qeydiyyatŞifrə");

sifreniGosder.addEventListener("change", () => {
    if (sifreniGosder.checked) {
        loginSifre.type = "text";
    } else {
        loginSifre.type = "password";
    }
});