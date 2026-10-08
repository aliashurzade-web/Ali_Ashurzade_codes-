// HTML-də olan elementləri gətiririk

let markaGiris =document.querySelector("#markaGiris");
let atGucuGiris =document.querySelector("#atGucuGiris");
let sekilLinkGiris =document.querySelector("#sekilLinkGiris");
let elaveEtDuymesi =document.querySelector("#elaveEtDuymesi");
let cedvelGovdesi =document.querySelector("#cedvelGovdesi");
let sekilOnBaxis =document.querySelector("#sekilOnBaxis");

// Şəkil linki xanasına nəsə yazdıqda
// şəkil önbaxışda görünsün

sekilLinkGiris.addEventListener("input", function () {

    if (sekilLinkGiris.value !== "") {

        sekilOnBaxis.src =sekilLinkGiris.value;

        sekilOnBaxis.style.display ="block";

    } else {

        sekilOnBaxis.style.display ="none";

    }

});

// "Əlavə et" düyməsinə klik edəndə
// məlumat cədvələ düşsün

elaveEtDuymesi.addEventListener(
    "click",
    function () {
 // a. Inputdakı dəyərləri götürək

    let marka =markaGiris.value;

    let atGucu =atGucuGiris.value;

    let sekilUnvani =sekilLinkGiris.value;

    // b. Xanalardan biri boşdursa
    // xəbərdarlıq et

    if (
        marka === "" ||atGucu === "" ||sekilUnvani === ""
    ) {
        alert(
        "Zəhmət olmasa, bütün xanaları doldurun !"
        );

            return;

    }

        // c. Maşın kodu yaratmaq
        // (Təsadüfi)

        let yaradilanKod ="MAS-" +
            Math.floor(
                Math.random() * 900 + 100
            );

         // d. Cədvəlin içinə göndərəcəyimiz
        // məlumatı səliqəyə salmaq

        let yeniSatir =
            "<tr>";


        yeniSatir +=
            "<td>" +
            yaradilanKod +
            "</td>";


        yeniSatir +=
            "<td>" +
            marka +
            "</td>";


        yeniSatir +=
            "<td>" +
            atGucu +
            " HP" +
            "</td>";


        yeniSatir +=
            "<td>" +
            "<img src='" +
            sekilUnvani +
            "' width='50' height='50'>" +
            "</td>";


        yeniSatir +=
            "<td>" +
            "<button onclick='if(confirm(\"Silməyə əminsiz ?\")) this.parentElement.parentElement.remove()' class='btn btn-danger'>" +
            "Sil" +
            "</button>" +
            "</td>";


        yeniSatir +=
            "</tr>";

        cedvelGovdesi.innerHTML +=
            yeniSatir;

        // e. Xanaları təmizləyirik

        markaGiris.value = "";
        atGucuGiris.value = "";
        sekilLinkGiris.value = "";
        sekilOnBaxis.style.display =
            "none";
    }
);