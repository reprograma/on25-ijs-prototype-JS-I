//Jéssica Baron exercise

function MedicalHistory() {
  this.consultations = [];
  this.vaccines = [];
  this.procedures = [];
}

MedicalHistory.prototype.addConsultation = function (date) {
  this.consultations.unshift(date); // Add to the beginning of the list
};

MedicalHistory.prototype.addVaccine = function (vaccine) {
  this.vaccines.push(vaccine);
};

MedicalHistory.prototype.addProcedure = function (type, reason) {
  this.procedures.push({ type: type, reason: reason });
};

function Cat(name, age, color, neutered, outdoor, medicalHistory) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.neutered = neutered;
  this.outdoor = outdoor;
  this.medicalHistory = medicalHistory;
}

Cat.prototype.meow = function () {
  console.log("The cat", this.name, "is meowing.");
};

Cat.prototype.vaccinate = function (vaccine) {
  this.medicalHistory.addVaccine(vaccine);
};

Cat.prototype.scheduleConsultation = function (date) {
  this.medicalHistory.addConsultation(date);
};

function Dog(name, age, color, neutered, breed, medicalHistory) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.neutered = neutered;
  this.breed = breed;
  this.medicalHistory = medicalHistory;
}

Dog.prototype.bark = function () {
  console.log("The dog", this.name, "is barking.");
};

Dog.prototype.vaccinate = function (vaccine) {
  this.medicalHistory.addVaccine(vaccine);
};

Dog.prototype.scheduleConsultation = function (date) {
  this.medicalHistory.addConsultation(date);
};

function ExoticAnimal(name, age, color, species, medicalHistory) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.species = species;
  this.medicalHistory = medicalHistory;
}

ExoticAnimal.prototype.getAdult = function () {
  if (this.species === "hamster") {
    return this.age >= 2;
  } else if (this.species === "parrot") {
    return this.age >= 36;
  } else if (this.species === "cockatiel") {
    return this.age >= 18;
  } else if (this.species === "turtle") {
    return this.age >= 60;
  } else {
    return false;
  }
};

ExoticAnimal.prototype.vaccinate = function (vaccine) {
  this.medicalHistory.addVaccine(vaccine);
};

ExoticAnimal.prototype.scheduleConsultation = function (date) {
  this.medicalHistory.addConsultation(date);
};

const medicalHistory = new MedicalHistory();
medicalHistory.addConsultation("9/7/2023");
medicalHistory.addConsultation("13/1/2023");
medicalHistory.addConsultation("20/7/2022");
medicalHistory.addVaccine("rabies");
medicalHistory.addVaccine("v8");
medicalHistory.addVaccine("v10");
medicalHistory.addProcedure("ultrasound", "pain");

const sindy = new Cat("Sindy", 120, "white", true, false, medicalHistory);
sindy.meow();
sindy.vaccinate("V12");
sindy.scheduleConsultation("11/2/2023");

const caramel = new Dog(
  "Caramelo",
  36,
  "caramel",
  false,
  "Vira lata Caramelo",
  medicalHistory
);
caramel.bark();
caramel.vaccinate("v8");
caramel.scheduleConsultation("5/6/2023");

const tata = new ExoticAnimal("Tata", 180, "green", "turtle", medicalHistory);
tata.vaccinate("v10");
tata.scheduleConsultation("29/3/2023");
console.log(tata.getAdult());
