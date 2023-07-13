// Constructor HistoricoMedico
function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}
// Constructor Gatificadora
function Gatificadora(nome, idade, cor, castrado, externo) {
    this.nome = nome;
    this.idade = idade/12;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico();   
}
// Métodos para o gato miar, receber vacina, consulta e realizar procedimento médico
Gatificadora.prototype.miar = function() {
    console.log("Minhau");
}
Gatificadora.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
}
Gatificadora.prototype.consultar = function(consulta) {
    this.historico.consultas.unshift(consulta);
}
Gatificadora.prototype.realizarProcedimentos = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
  };

// Criando um gato
let gatoKlaus = new Gatificadora("Klaus", 36, "malhado", false, false);
gatoKlaus.realizarProcedimentos("exame","dores");
gatoKlaus.vacinar("raiva");
gatoKlaus.consultar("17/06/2023");
console.log(gatoKlaus)

// Constructor Cachorro
function Cachorrificadora(nome, idade, cor, castrado, raca) {
    this.nome = nome;
    this.idade = idade/12;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico();
}
// Métodos para o cachorro latir, receber vacina, consulta e realizar procedimento médico
Cachorrificadora.prototype.latir = function() {
    console.log("Au au au");
}
Cachorrificadora.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
}
Cachorrificadora.prototype.consultar = function(consulta) {
    this.historico.consultas.unshift(consulta);
}
Cachorrificadora.prototype.realizarProcedimentos = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
  };

  // Criando um cachorro
let cachorroBento = new Cachorrificadora("Bento", 60, "preto e branco", false, "shihtzu");
cachorroBento.realizarProcedimentos("exame", "dores");
cachorroBento.vacinar("raiva");
cachorroBento.consultar("17/06/2023");
console.log(cachorroBento)

// Constructor Exótico
function Exotificador(nome, idade, cor, especie) {
    this.nome = nome;
    this.idade = idade/12;
    this.cor = cor;
    this.especie = especie;
    this.historico = new HistoricoMedico();
}
Exotificador.prototype.getAdulto = function() {
    if (this.especie === "hamster") {
        return this.idade >= 2;
    } else if (this.especie === "papagaio") {
        return this.idade >= 36;
    } else if (this.especie === "calopsita") {
        return this.idade >= 18;
    } else {
        return false;
    }
}
// Métodos para o animal exótico receber vacina, consulta e realizar procedimento médico
Exotificador.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
}
Exotificador.prototype.consultar = function(consulta) {
    this.historico.consultas.unshift(consulta);
}
Exotificador.prototype.realizarProcedimentos = function (tipo, motivo) {
    this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
  };

// Criando um animal exótico
let exoticoPapagaio = new Exotificador("Pipo", 36, "verde", "papagaio");
exoticoPapagaio.realizarProcedimentos("exame", "dores");
exoticoPapagaio.vacinar("raiva");
exoticoPapagaio.consultar("17/06/2023");
console.log(exoticoPapagaio)