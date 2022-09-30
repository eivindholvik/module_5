const createAnimal = require("./task");

test("Method in createAnimal correctly utputs string", () => {
  const myObj = {
    name: "Test",
    type: "Cat",
    food: "Fish",
    eat: () => {
      return `${name} is a ${type} and eats ${food}`;
    },
  };
  const test1 = JSON.stringify(myObj);

  expect(createAnimal("Test", "Cat", "Fish")).toBe(myObj);
});
