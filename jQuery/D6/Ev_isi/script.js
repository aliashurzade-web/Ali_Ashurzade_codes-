$.ajax({
    url: "https://jsonplaceholder.typicode.com/users/3",
    type: "DELETE",
    success: function(myData) {
        console.log(" Uğurlu silinmə, myData:", myData);
    },
    error: function(xhr, status, error) {
        console.error(" Xəta baş verdi:", error);
    }
});

$.ajax({
    url: "https://jsonplaceholder.typicode.com/users/2",
    type: "PUT",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    data: JSON.stringify({
        name: "Elvin Məmmədov",
        email: "elvin.mammadov@example.com",
        address: {
            city: "Baku"
        }
    }),
    success: function(myData) {
        console.log(" Tam yeniləndi, myData:", myData);
    },
    error: function(xhr, status, error) {
        console.error(" Xəta baş verdi:", error);
    }
});

$.ajax({
    url: "https://jsonplaceholder.typicode.com/users/7",
    type: "PATCH",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    },
    data: JSON.stringify({
        username: "elvin_dev",
        email: "elvin.dev@example.com",
        age: 26
    }),
    success: function(myData) {
        console.log(" Qismən yeniləndi, myData:", myData);
    },
    error: function(xhr, status, error) {
        console.error("Xəta baş verdi:", error);
    }
});

// muellim put kohne melumatlari silir yeni hecne qalmir puta yazdigimizdan basqa bu elvin_dev falan onlari sorusdum ki bele example ver ona gore her yerde elvin var
// muellim patch ise istediyimiz melumati deyisir put kimi silmir gedib hemin deyiseni tapir onu deyisir yeni put temmiz silir yenisini yazir patch ise tapib silir
