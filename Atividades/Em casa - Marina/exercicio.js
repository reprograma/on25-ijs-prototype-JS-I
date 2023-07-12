//construtor historico médico
function HistoricoMedico() {
  this.consultas = [],
  this.vacinas = [], 
  this.procedimentos = [];
}
// construtor gatos
function FazedoraDeGatos(nome, idade, cor, castrado, externo) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.externo = externo;
  this.historico = new HistoricoMedico();
}

FazedoraDeGatos.prototype.miar = function () {
  console.log("Miau");
};
FazedoraDeGatos.prototype.realizarConsulta = function (consulta) {
  this.historico.consultas.unshift(consulta);
};

FazedoraDeGatos.prototype.realizarVacina = function (vacina) {
  this.historico.vacinas.push(vacina);
};

FazedoraDeGatos.prototype.realizarProcedimentos = function (tipo, motivo) {
  this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
};

let phoebe = new FazedoraDeGatos("Phoebe", 4, "preto", true, true);
phoebe.realizarProcedimentos("ultrassom", "dores");
phoebe.realizarVacina("raiva");
phoebe.realizarConsulta("15/02/2022");
phoebe.realizarConsulta("20/05/2022");

//construtor cachorros
function FazedoraDeCachorros(nome, idade, cor, castrado, raça) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raça = raça;
  this.historico = new HistoricoMedico();
}
FazedoraDeCachorros.prototype.latir = function () {
  console.log("AU AU");
};

FazedoraDeCachorros.prototype.realizarConsulta = function (consulta) {
  this.historico.consultas.unshift(consulta);
};
FazedoraDeCachorros.prototype.realizarVacina = function (vacina) {
  this.historico.vacinas.push(vacina);
};

FazedoraDeCachorros.prototype.realizarProcedimentos = function (tipo, motivo) {
  this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
};

let pancho = new FazedoraDeCachorros(
  "Pancho",
  12,
  "ruivo",
  false,
  "Pastor Belga Malinois"
);
pancho.realizarProcedimentos("injeção", "alergia");
pancho.realizarVacina("hepatite");
pancho.realizarConsulta("19/02/2020");
pancho.realizarConsulta("05/01/2023");

//construtor animais exóticos
function FazedoraDeExoticos(nome, idade, cor, especie) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.historico = new HistoricoMedico();
  this.adulto;
}

Object.defineProperty(FazedoraDeExoticos.prototype, "adulto", {
  get: function(){
    if (this.especie === "Hamster" && this.idade >= 2) {
      return true;
    } else if (this.especie === "Papagaio" && this.idade >= 36) {
      return true;
    } else if (this.especie === "Calopsita" && this.idade >= 18) {
      return true;
    } else {
      return false;
    }
  }
})

FazedoraDeExoticos.prototype.realizarConsulta = function (consulta) {
  this.historico.consultas.unshift(consulta);
};
FazedoraDeExoticos.prototype.realizarVacina = function (vacina) {
  this.historico.vacinas.push(vacina);
};

FazedoraDeExoticos.prototype.realizarProcedimentos = function (tipo, motivo) {
  this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
};

let hamtaro = new FazedoraDeExoticos("Hamtaro", 2, "branco", "Hamster");
hamtaro.realizarProcedimentos("injeção", "alergia");
hamtaro.realizarVacina("raiva");
hamtaro.realizarConsulta("03/08/2019");
hamtaro.realizarConsulta("10/07/2023");