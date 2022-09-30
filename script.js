// const persons = [
//   {
//     firstName: "Ola",
//     lastName: "Nordmann",
//     address: {
//       country: "Norway",
//       city: "Oslo",
//     },
//     greet: function () {
//       console.log("Hello world!");
//     },
//   },
//   {
//     firstName: "Jorgen",
//     lastName: "Hoyaas",
//     address: {
//       country: "Norway",
//       city: "Kristiansand",
//     },
//     greet: function () {
//       console.log("Hello world!");
//     },
//   },
// ];

// function mySting(value) {
//   return `My string is: ${value}`;
// }

// // console.log(mySting("Jeg liker is"));
// // console.log(mySting("Jeg liker kjeks"));

// const createPerson = (firstName, lastName, country, city) => {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     address: {
//       country: country,
//       city: city,
//     },
//     greet: () => {
//       console.log(
//         `My name is ${firstName} ${lastName} and I'm from ${city}, ${country}!`
//       );
//     },
//   };
// };

// // console.log(createPerson("Krutt", "Nilsen", "Norge", "Bergen"));

// const person = createPerson("Krutt", "Nilsen", "Norge", "Bergen");
// person.greet();

// const persons = [
//   createPerson("Krutt", "Nilsen", "Norge", "Bergen"),
//   createPerson("Martin", "Pettersen", "Norge", "Våler"),
// ];

// console.log(persons);

// createPerson("Martin", "Pettersen", "Norge", "Våler").greet();

// const persons1 = [];

// const clearForm = () => {
//   document.querySelector("#firstName").value = "";
//   document.querySelector("#lastName").value = "";
//   document.querySelector("#city").value = "";
//   document.querySelector("#country").value = "";
// };

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const firstName = document.querySelector("#firstName").value;
//   const lastName = document.querySelector("#lastName").value;
//   const country = document.querySelector("#city").value;
//   const city = document.querySelector("#country").value;
//   const person = createPerson(firstName, lastName, country, city);
//   person.greet();
//   persons1.push(person);
//   clearForm();
// });

// document
//   .querySelector("#show")
//   .addEventListener("click", () => console.log(persons1));
