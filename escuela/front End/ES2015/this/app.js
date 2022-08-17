//This ; .bind ;.call

//call

const pet = {
  name: "Rocky",
  type: "americanBully",
  dance: function (dance) {
    // console.log(`this is :`, this);
    console.log(`My type is ${this.type} and i like to ${dance}`);
  },
};

const howToCall = pet.dance;

howToCall.call(pet, "eat");

const dog = {
  name: "king",
  breed: "sato",
  type: "loving",
};

howToCall.call(dog, "eatalot");

//bind

const ferret = pet.dance;

const michos = ferret.bind(pet);

const danceDog = pet.dance.bind(dog);

function applySalesTax(taxRate, price) {
  console.log(`first  ${taxRate},second ${price}`);
  return price + price * taxRate;
}

const applyCATax = applySalesTax.bind(null, 0.0725);

const planetF = {
  name: "Denny",
  total: 200,
};

function collectMonthlyFee(fee) {
  const remaining = this.total - fee;
  this.total = remaining;
  return this.name + " remaining balance:" + remaining;
}

const fee = collectMonthlyFee.bind(planetF, 10);

const blue = {
  name: "Blue",
  breed: "Scottish Fold",
  greet() {
    alert(`${this.name} says meow`);
  },
};

document.querySelector("#b").addEventListener("click", blue.greet.bind(blue));

function popUp(msg) {
  alert("Secret message is " + msg);
}

const btnA = document.querySelector("#a");

btnA.addEventListener("click", popUp.bind(null, "Button A Says Hi"));
