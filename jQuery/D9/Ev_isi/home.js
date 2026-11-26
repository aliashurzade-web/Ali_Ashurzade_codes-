let xosGeldinMesaji = document.querySelector("#xosGeldinMesaji");
let cixisDüymesi = document.querySelector("#cixisDüymesi");

// 1. Aktiv istifadəçini gətiririk (RAM yaddaşından)
let aktivIstifadeci = sessionStorage.getItem("aktivIstifadeci");

// 2. Əgər kimsə login olmadan bu linkə giribsə (aktivIstifadeci yoxdursa), onu geri qovuruq
if (aktivIstifadeci === null) {
    alert("Zəhmət olmasa əvvəlcə giriş edin! Bura məxfi zonadır.");
    window.location.href = "./auth.html"; // Qeydiyyat/giriş səhifəsinə yönləndiririk
} else {
    // 3. Əgər hər şey qaydasındadırsa, adını ekrana yazdırırıq
    xosGeldinMesaji.innerText = "Xoş gəldin, " + aktivIstifadeci + "!";
}

// 4. Çıxış düyməsi məntiqi
cixisDüymesi.addEventListener("click", () => {
    // Session yaddaşını təmizləyirik (aktiv istifadəçini silirik)
    sessionStorage.removeItem("aktivIstifadeci");

    alert("Hesabdan uğurla çıxış etdiniz. Hələlik!");
    
    // Geri qarşılama səhifəsinə qaytarırıq
    window.location.href = "./index.html";
});