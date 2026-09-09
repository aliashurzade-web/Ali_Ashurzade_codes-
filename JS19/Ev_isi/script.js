let pet = {
  type: "Pişik",
  name: "Məstan"
};

pet.name = "Toplan";

console.log(pet);

let spaceship = {
  name: "Apollo",
  speed: 1000
};

spaceship.color = "gümüşü";

console.log(spaceship);

let magicBox = {
  color: "qırmızı",
  size: "böyük",
  danger: "zəhər"
};

delete magicBox.danger;

console.log(magicBox);

let robot = {
  model: "T-800",
  battery: 80,
  task: "təmizlik"
};

console.log(Object.keys(robot));

console.log(Object.values(robot));

let player = {
  username: "Gamer123",
  level: 5,
  illness: "soyuqdəymə"
};

player.level = 6;

player.weapon = "qılınc";

delete player.illness;

console.log(player);

let schoolBag = {
  books: 4,
  notebooks: 2
};


schoolBag.ruler = "var";


console.log(Object.values(schoolBag));
