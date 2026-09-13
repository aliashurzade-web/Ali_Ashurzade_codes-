function Phone(model, color, price) {
  this.model = model;
  this.color = color;
  this.price = price;
}

const phone1 = new Phone("iPhone 15", "Qara", 2000);
const phone2 = new Phone("Samsung S24", "Ağ", 1800);

phone1.price = 2200; 

delete phone2.color; 

console.log(phone1);
console.log(phone2);

function Animal(type, name, age) {
  this.type = type;
  this.name = name;
  this.age = age;
}

const animal1 = new Animal("İt", "Rex", 3);
const animal2 = new Animal("Pişik", "Murka", 2);

animal1.age += 1; 

delete animal2.type; 
animal2.breed = "Fars pişiyi"; 

console.log(animal1);
console.log(animal2);

function Gamer(nickname, level) {
  this.nickname = nickname;
  this.level = level;
  
  this.levelUp = function() {
    this.level = this.level + 1;
    return this.level;
  };
}

const gamer1 = new Gamer("ShadowKiller", 5);

console.log("Yeni səviyyə: " + gamer1.levelUp());
console.log(gamer1);

function Product(title, price) {
  this.title = title;
  this.price = price;
  
  this.getDiscountedPrice = function() {
    return this.price - 5;
  };
}

const product1 = new Product("Su", 10);
const product2 = new Product("Çörək", 8);

console.log(product1.title + " - Endirimli qiymət: " + product1.getDiscountedPrice() + " AZN");
console.log(product2.title + " - Endirimli qiymət: " + product2.getDiscountedPrice() + " AZN");

function Computer(brand, year, ram) {
  this.brand = brand;
  this.year = year;
  this.ram = ram;
  
  this.getAge = function() {
    return new Date().getFullYear() - this.year;
  };
  
  this.checkPerformance = function() {
    if (this.ram >= 8) {
      return "Güclü kompüterdir";
    } else {
      return "Zəif kompüterdir";
    }
  };
}

const computer1 = new Computer("Dell", 2019, 16);
const computer2 = new Computer("HP", 2015, 4);

console.log(computer1.brand + " yaşı: " + computer1.getAge() + " - " + computer1.checkPerformance());
console.log(computer2.brand + " yaşı: " + computer2.getAge() + " - " + computer2.checkPerformance());


function Student(name, point, birthYear) {
  this.name = name;
  this.point = point;
  this.birthYear = birthYear;
  
  this.getAge = function() {
    return new Date().getFullYear() - this.birthYear;
  };
  
  this.hasPassed = function() {
    if (this.point >= 50) {
      return "Keçdi";
    } else {
      return "Kəsildi";
    }
  };
}

const student1 = new Student("Aysel", 65, 2003);
const student2 = new Student("Kamran", 40, 2000);

console.log(student1.name + " yaşı: " + student1.getAge() + " - Nəticə: " + student1.hasPassed());
console.log(student2.name + " yaşı: " + student2.getAge() + " - Nəticə: " + student2.hasPassed());