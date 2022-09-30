// Oppgave:
const createAnimal = (name, type, food) => {
  return {
    name: name,
    type: type,
    food: food,
    eat: () => {
      return `${name} is a ${type} and eats ${food}`;
    },
  };
};

// function sum(x, y) {
//   return x + y;
// }

const potemann = createAnimal("Potemann", "Cat", "Fisk");
const lars = createAnimal("Lars", "Fisk", "Alger");
const hansemann = createAnimal("Hansemann", "Fogel", "Nyddår");
const garfield = createAnimal("Garfeild", "cat", "Lasagne");
const albert = createAnimal("Albert", "Humanoid", "Baguette med Ost og Skinke");
potemann.eat();
lars.eat();
hansemann.eat();
garfield.eat();
albert.eat();

module.exports = createAnimal;
