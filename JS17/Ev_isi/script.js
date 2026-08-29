const supermmed = {
    name : "Super Memmed",
    power : "Ucmaq",
    level : 5,

    getheroinfo:function(){
        return `Qehraman: ${this.name}, Guc: ${this.power}, Seviyye: ${this.level}.`
    }
};
console.log(supermmed.getheroinfo());

const pisik = {
    petname : "Mestan",
    type : "Pisik",
    age : 5,

    getcatinfo:function(){
        return `Ev heyvani: ${this.type} ${this.petname}, Yas: ${this.age}.`
    }
};

console.log(pisik.getcatinfo());

const gamescore = {
    levelscore : 40,
    levelscore2 : 60,

    calclevel:function(){
        return this.levelscore+this.levelscore2
    }
};
console.log(gamescore.calclevel());

const pizza = {
    slicePrice : 3, 
    sliceCount : 6,

    calcprice:function(){
        return this.slicePrice*this.sliceCount
    }
};

console.log(pizza.calcprice());

let CinemaTicket = {
    movieName: "Avatar 2",
    ticketPrice: 10,
    isWeekend: true,

    calcTicketPrice:function(){
        if (this.isWeekend === true) {
            this.ticketPrice = this.ticketPrice + 2;
        }

        return `Avatar 2 filmi üçün bilet qiyməti: ${this.ticketPrice} AZN`;
    }
};

console.log(CinemaTicket.calcTicketPrice());

const robot = {
    robotname : "Robot-X",
    battery : 15,

    checkbatteryprecentage:function(){
        if (this.battery<20){
            console.log("Robo-X: Xəbərdarlıq! Zaryadka azdır, zaryadkaya qoşun!")
        }else {
            console.log("Robo-X: Zaryadka kifayətdir, işə davam etmək olar! qaytarsın.")
        }
    }
};

console.log(robot.checkbatteryprecentage());