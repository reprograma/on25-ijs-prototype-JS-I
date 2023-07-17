//construtor historico médico
function HistoricoMedico() {
  this.consultas = [],
  this.vacinas = [], 
  this.procedimentos = [];
}
HistoricoMedico.prototype.realizarConsulta = function (consulta) {
  this.consultas.unshift(consulta);
};

HistoricoMedico.prototype.realizarVacina = function (vacina) {
  this.vacinas.push(vacina);
};

HistoricoMedico.prototype.realizarProcedimentos = function (tipo, motivo) {
  this.procedimentos.push({ tipo: tipo, motivo: motivo });
};
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

let phoebe = new FazedoraDeGatos("Phoebe", 4, "preto", true, true);
phoebe.historico.realizarProcedimentos("ultrassom", "dores");
phoebe.historico.realizarVacina("raiva");
phoebe.historico.realizarConsulta("15/10/2020");
phoebe.historico.realizarConsulta("08/05/2021");

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

let pancho = new FazedoraDeCachorros(
  "Pancho",
  12,
  "ruivo",
  false,
  "Pastor Belga Malinois"
);
pancho.historico.realizarProcedimentos("injeção", "alergia");
pancho.historico.realizarVacina("hepatite");
pancho.historico.realizarConsulta("19/02/2020");
pancho.historico.realizarConsulta("05/01/2023");

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


let hamtaro = new FazedoraDeExoticos("Hamtaro", 2, "branco", "Hamster");
hamtaro.historico.realizarProcedimentos("injeção", "alergia");
hamtaro.historico.realizarVacina("raiva");
hamtaro.historico.realizarConsult("03/08/2019");
hamtaro.historico.realizarConsult("10/07/2023");