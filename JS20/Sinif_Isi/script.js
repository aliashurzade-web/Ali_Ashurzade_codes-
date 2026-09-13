function Fruit(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

const alma = new Fruit("Alma", "Qırmızı", 2.5);
const banan = new Fruit("Banan", "Sarı", 1.8);

alma.price = 3.2;

delete banan.color;

console.log(alma);
console.log(banan);

function Player(name, score) {
  this.name = name;
  this.score = score;

  this.addScore = function () {
    return this.score + 10;
  };
}

const player1 = new Player("Elvin", 50);

console.log("Yeni xal:", player1.addScore());

function Car(brand, year) {
  this.brand = brand;
  this.year = year;

  this.getAge = function () {
    return new Date().getFullYear() - this.year;
  };

  this.isNew = function () {
    if (this.getAge() < 3) {
      return "Təzə maşındır";
    } else {
      return "Köhnə maşındır";
    }
  };
}

const car1 = new Car("Toyota", 2024);
const car2 = new Car("Lada", 2015);

console.log(car1.brand, "-", car1.getAge(), "yaşındadır -", car1.isNew());
console.log(car2.brand, "-", car2.getAge(), "yaşındadır -", car2.isNew());
