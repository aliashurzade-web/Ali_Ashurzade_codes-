const hero = {
  name: "Hörümçək Adam",
  health: 50
};

hero.health = 100;
hero.power = "Tor atmaq";

console.log(hero);

const car = {
  brand: "Ford",
  year: 2022,
  damage: "Qapısı cızıqdır"
};

delete car.damage;

console.log(car);

const student = {
  name: "Əli",
  age: 12,
  subject: "Proqramlaşdırma"
};

const studentKeys = Object.keys(student);
console.log(studentKeys);

const studentValues = Object.values(student);
console.log(studentValues);
