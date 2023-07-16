// construtor para Historico Medico 
function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
  }

// adicionando uma consulta ao HM
HistoricoMedico.prototype.consultar = function(data) {
    this.consultas.unshift(data);
  };

// adicionando uma vacina ao HM
HistoricoMedico.prototype.vacinar = function(vacina) {
    this.vacinas.push(vacina);
  }

// construtor de gatinhos 

  function Gato(nome, idade, cor, castrado, externo) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico();
  }

let marciaTeresa = new Gato("Marcia Teresa", "tigrada", 16, true);

// ensinando Marcia Teresa a miar 
Gato.prototype.miar = function() {
    console.log("Miaaaaaaauuu!");
  };

// Construtor de Cachorro
function Cachorro(nome, idade, cor, castrado, raca) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico();
  }

 let safira = new Cachorro ("safira", 20, "preto e branco", false, "vira lata"); 
 
 Cachorro.prototype.latir= function() { console.log("Au Au Au")};


 // Construtor de animais exóticos

 function Exotico(nome, idade, cor, especie) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historico = new historicoMedico();


// getter pra verificar se é adulto
  
    Object.defineProperty(this, "adulto", {
      get: function () {
        if (this.especie === "hamster") {
          return this.idade >= 2;
        } else if (this.especie === "papagaio") {
          return this.idade >= 36; 
        } else if (this.especie === "calopsita") {
          return this.idade >= 18;
        } else {
          return false; 
        }
      },
    });
  }
  
  let franklin = new Exotico("Franklin", 7, "cinza", "hamster");
  console.log(franklin.adulto); // false
  

