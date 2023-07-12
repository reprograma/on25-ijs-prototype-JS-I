function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
  }
  

  HistoricoMedico.prototype.adicionarConsulta = function (data) {
    this.consultas.unshift(data);
  };
 
  HistoricoMedico.prototype.adicionarVacina = function (vacina) {
    this.vacinas.push(vacina);
  };
  
  HistoricoMedico.prototype.adicionarProcedimento = function (procedimento) {
    this.procedimentos.push(procedimento);
  };
  
 
  function Gato(nome, idade, cor, castrado, externo) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico();
  }
  

  Gato.prototype.miar = function () {
    console.log("Miau!");
  };
  
  Gato.prototype.vacinar = function (vacina) {
    this.historico.adicionarVacina(vacina);
  };
  
  Gato.prototype.consultar = function (data) {
    this.historico.adicionarConsulta(data);
  };
  
  function Cachorro(nome, idade, cor, castrado, raça) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raça = raça;
    this.historico = new HistoricoMedico();
  }
  
  Cachorro.prototype.latir = function () {
    console.log("Au au!");
  };
  
  Cachorro.prototype.vacinar = function (vacina) {
    this.historico.adicionarVacina(vacina);
  };
  
  Cachorro.prototype.consultar = function (data) {
    this.historico.adicionarConsulta(data);
  };
  
  function Exotico(nome, idade, cor, especie) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historico = new HistoricoMedico();
  }
  
  
  Exotico.prototype.vacinar = function (vacina) {
    this.historico.adicionarVacina(vacina);
  };
  
  Exotico.prototype.consultar = function (data) {
    this.historico.adicionarConsulta(data);
  };


var gato = new Gato("Rabitto", 27, "branco", true, false);
console.log(gato.nome);
gato.miar(); 
gato.vacinar("v8");
console.log(gato.historico.vacinas); 
gato.consultar("9/7/2023");
console.log(gato.historico.consultas); 


var cachorro = new Cachorro("Amora", 25, "cinza", false, "vira-lata");
console.log(cachorro.nome);
cachorro.latir(); 
cachorro.vacinar("v10");
console.log(cachorro.historico.vacinas); 
cachorro.consultar("09/3/2023");
console.log(cachorro.historico.consultas); 


var exotico = new Exotico("Sushi", 36, "mel e branco", "Calopsita");
console.log(exotico.nome); 
exotico.vacinar("raiva");
console.log(exotico.historico.vacinas); 
exotico.consultar("20/7/2022");
console.log(exotico.historico.consultas);