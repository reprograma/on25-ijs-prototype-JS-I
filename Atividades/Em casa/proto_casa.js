function MakeMedicalHistory() {
  this.consultas = [];
  this.vacinas = [];
  this.procedimentos = [];
}
MakeMedicalHistory.prototype.vacinar = function (vaccineName) {
  this.historico.vacinas.push(vaccineName);
};
MakeMedicalHistory.prototype.examinar = function (dateOfprocedures) {
  this.historico.consultas.unshift(dateOfprocedures);
};
MakeMedicalHistory.prototype.procedimentos = function (value) {
  this.historico.consultas.unshift(value);
};

function makeMoreCats(name, age, color, domestic) {
  this.nome = name;
  this.idade = age;
  this.cor = color;
  this.externo = domestic;
  this.historico = new MakeMedicalHistory();
}

makeMoreCats.prototype.miar = function () {
  console.log("miauuu!");
};

function makeMoreDogs(name, age, color, castrated, race) {
  this.nome = name;
  this.idade = age;
  this.cor = color;
  this.castrado = castrated;
  this.reça = race;
  this.historico = new MakeMedicalHistory();
}

makeMoreDogs.prototype.latir = function () {
  console.log("AUAU!");
};

function makeMoreExoticAnimals(name, age, color, species, adult) {
  this.nome = name;
  this.idade = age;
  this.cor = color;
  this.especie = species;
  this.adulto = adult;
  this.historico = new MakeMedicalHistory();
}

Object.defineProperty(makeMoreExoticAnimals.prototype, "verificarAdulto", {
  get: function () {
    if (this.species === "hamster") {
      if (this.age >= 2) {
        this.adulto = true;
      } else {
        this.adulto = false;
      }
    }
    if (this.species === "papagaio") {
      if (this.age >= 36) {
        this.adulto = true;
      } else {
        this.adulto = false;
      }
    }
    if (this.species === "calopsita") {
      if (this.age >= 18) {
        this.adulto = true;
      } else {
        this.adulto = false;
      }
    }
  },
});
