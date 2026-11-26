// Keçid düymələri və ekranlar
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

// Şifrəni göstər funksiyası
let şifrəniGöstər = document.querySelector("#şifrəniGöstər");
let loginŞifrə = document.querySelector("#loginŞifrə");

şifrəniGöstər.addEventListener("change", () => {
    if (şifrəniGöstər.checked) {
        loginŞifrə.type = "text";
    } else {
        loginŞifrə.type = "password";
    }
});

// 1. QEYDİYYAT MƏNTİQİ
let qeydiyyatFormu = document.querySelector("#qeydiyyatFormu");
let adGiriş = document.querySelector("#adGiriş");
let emailGiriş = document.querySelector("#emailGiriş");
let şifrəGiriş = document.querySelector("#şifrəGiriş");
let şifrəTəkrar = document.querySelector("#şifrəTəkrar");
let yaşGiriş = document.querySelector("#yaşGiriş");

qeydiyyatFormu.addEventListener("submit", (event) => {
    event.preventDefault(); // Səhifənin yenilənməsinin qarşısını alır

    // Şifrələr üst-üstə düşürmü?
    if (şifrəGiriş.value != şifrəTəkrar.value) {
        alert("Xəta ! Şifrələr üst-üstə düşmür");
        return; 
    }

    // Yaş validasiyası
    if (parseInt(yaşGiriş.value) < 18) {
        alert("Yaşınız ən az 18 olmalıdır");
        return; 
    }

    // Yaddaşdakı massivi oxumaq
    let istifadəcilərinSiyahısı = JSON.parse(localStorage.getItem("bütünİstifadəçilər")) || [];

    // E-poçt artıq mövcuddurmu yoxlanışı
    let emailArtıqVar = false;
    for (let i = 0; i < istifadəcilərinSiyahısı.length; i++) {
        if (istifadəcilərinSiyahısı[i].email === emailGiriş.value) {
            emailArtıqVar = true;
            break;
        }
    }

    if (emailArtıqVar) {
        alert("Bu email ilə artıq başqa bir hesab var. Zəhmət olmasa başqa email istifadə edin və ya giriş edin.");
        return;
    }

    // Yeni istifadəçi obyekti
    let yeniİstifadəçi = {
        ad: adGiriş.value,
        email: emailGiriş.value,
        şifrə: şifrəGiriş.value
    };

    istifadəcilərinSiyahısı.push(yeniİstifadəçi);
    localStorage.setItem("bütünİstifadəçilər", JSON.stringify(istifadəcilərinSiyahısı));

    // İstifadəçinin adını sessionStorage-ə yazırıq ki, home səhifəsində tanıya bilək
    sessionStorage.setItem("aktivIstifadeci", yeniİstifadəçi.ad);

    alert("Qeydiyyat tamamlandı!");
    qeydiyyatFormu.reset();

    // Qeydiyyat bitən kimi birbaşa home.html səhifəsinə göndəririk
    window.location.href = "./home.html";
});


// 2. GİRİŞ (LOGIN) MƏNTİQİ
let loginForm = document.querySelector("#signUp");
let loginEmail = document.querySelector("#qeydiyyatEmail");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Səhifənin yenilənməsinin qarşısı alınır

    let istifadəcilərinSiyahısı = JSON.parse(localStorage.getItem("bütünİstifadəçilər")) || [];

    if (istifadəcilərinSiyahısı.length === 0) {
        alert("Sistemdə heç bir istifadəçi tapılmadı. Zəhmət olmasa əvvəlcə qeydiyyat olun.");
        return;
    }

    let tapilanİstifadeçi = null;
    for (let i = 0; i < istifadəcilərinSiyahısı.length; i++) {
        if (istifadəcilərinSiyahısı[i].email === loginEmail.value && istifadəcilərinSiyahısı[i].şifrə === loginŞifrə.value) {
            tapilanİstifadeçi = istifadəcilərinSiyahısı[i];
            break;
        }
    }

    if (tapilanİstifadeçi != null) {
        alert("Uğurla daxil oldunuz.");

        // Daxil olmuş istifadəçini sessionStorage-də saxlayırıq
        sessionStorage.setItem("aktivIstifadeci", tapilanİstifadeçi.ad); 

        // Giriş edəndə də home.html səhifəsinə yönləndiririk
        window.location.href = "./home.html";
    } else {
        alert("Email və ya şifrə yanlışdır.");
    }
});