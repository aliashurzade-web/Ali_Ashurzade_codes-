$(document).ready(function(){

    // Çalışma 1: bütün istifadəçilərin adı və şəhəri
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',

        success: function(myData){
            console.log(myData);
            myData.forEach(elem => {
                let myLi = document.createElement('li');
                myLi.innerText = elem.name + ' - ' + elem.address.city;
                $("#usersList").append(myLi);
            });
        },

        error: function(myError){
            console.log('Kodda bu xəta baş verdi: ', myError);
        }
    });

    // Çalışma 2: userId=3, yalnız tamamlanmış tapşırıqlar
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos?userId=3',
        method: 'GET',

        success: function(myData){
            console.log(myData);
            myData.forEach(elem => {
                if (elem.completed === true) {
                    let myLi = document.createElement('li');
                    myLi.innerText = elem.title;
                    $("#todosList").append(myLi);
                }
            });
        },

        error: function(myError){
            console.log('Kodda bu xəta baş verdi: ', myError);
        }
    });

    // Çalışma 3: yeni şərh göndər (POST)
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/comments',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        data: JSON.stringify({
            postId: 5,
            name: 'Ad Soyad', // bura öz adını yaz
            email: 'test@example.com',
            body: 'Bu mənim test şərhimdir.'
        }),

        success: function(myData){
            console.log(myData);
            $("#result").text('Yeni şərh uğurla əlavə olundu, Şərh ID: ' + myData.id);
        },

        error: function(myError){
            console.log('Kodda bu xəta baş verdi: ', myError);
        }
    });

});