var myPetsArray = [
  {
    animalType: "Dog",
    name: ["Pujdo"],
  },
  {
    animalType: "Cat",
    name: ["Maca"],
  },
  {
    animalType: "Bird",
    name: ["Tweety"],
  },
];

function myPetsFunction(pets) {
  return pets;
}
console.log(myPetsFunction(myPetsArray[1].name[0]));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;