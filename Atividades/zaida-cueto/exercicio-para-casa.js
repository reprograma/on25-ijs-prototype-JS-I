// Definição do construtor para o histórico médico
function HistoricoMedico() {
  this.consultas = []; // Array para armazenar as consultas
  this.vacinas = []; // Array para armazenar as vacinas
  this.procedimentos = []; // Array para armazenar os procedimentos
}

// Definição do construtor para Gato
function Gato(nome, idade, cor, castrado, externo, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.externo = externo;
  this.historico = historico; // Referência ao histórico médico do gato
}

// Método miar para Gato
Gato.prototype.miar = function() {
  return " miau miau miau"
};

// Método vacinar para Gato
Gato.prototype.vacinar = function(novaVacina) {
  this.historico.vacinas.push(novaVacina);
};

// Método consultar para Gato
Gato.prototype.consultar = function(data) {
  this.historico.consultas.unshift(data);
};

// Definição do construtor para Cachorro
function Cachorro(nome, idade, cor, castrado, raca, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.castrado = castrado;
  this.raca = raca;
  this.historico = historico; // Referência ao histórico médico do cachorro
}

// Método latir para Cachorro
Cachorro.prototype.latir = function() {
  return "AU AU AU"
};

// Método vacinar para Cachorro
Cachorro.prototype.vacinar = function(novaVacina) {
  this.historico.vacinas.push(novaVacina);
};

// Método consultar para Cachorro
Cachorro.prototype.consultar = function(data) {
  this.historico.consultas.unshift(data);
};

// Definição do construtor para Exótico
function Exotico(nome, idade, cor, especie, historico) {
  this.nome = nome;
  this.idade = idade;
  this.cor = cor;
  this.especie = especie;
  this.historico = historico; // Referência ao histórico médico do animal exótico
}

// Getter adulto para Exótico
Object.defineProperty(Exotico.prototype, "adulto", {
  get: function() {
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
});

// Método vacinar para Exótico
Exotico.prototype.vacinar = function(novaVacina) {
  this.historico.vacinas.push(novaVacina);
};

// Método consultar para Exótico
Exotico.prototype.consultar = function(data) {
  this.historico.consultas.unshift(data);
};

// Criação do objeto de histórico médico
 const  historico = new HistoricoMedico();

// Preenchendo o histórico com dados 
historico.consultas.push(new Date(2023, 6, 9));
historico.consultas.push(new Date(2023, 0, 13));
historico.consultas.push(new Date(2022, 6, 20));
historico.vacinas.push("raiva");
historico.vacinas.push("v8");
historico.vacinas.push("v10");
historico.procedimentos.push({ tipo: "ultrassom", motivo: "dores" });

// Criação dos objetos de animais
 const  gato = new Gato("Nina", 18, "frajola", true, false, historico);
 const  cachorro = new Cachorro("Zeus", 42, "preto", false, "labrador", historico);
 const  exotico = new Exotico("Iogurte", 19, "branco e laranja", "hamster", historico);

// Execução dos métodos para exibir as saídas
console.log(gato.miar());
console.log(cachorro.latir());

gato.vacinar("v4");
cachorro.vacinar("v12");
exotico.vacinar("v2");

gato.consultar(new Date());
cachorro.consultar(new Date());
exotico.consultar(new Date());

// Exibição dos objetos e históric; 
console.log("\ Historico medico")
console.log(JSON.stringify(historico, null, 2)); // Saída do histórico médico
console.log("\n Gato")
console.log(JSON.stringify(gato, null, 2)); // Saída do objeto Gato
console.log("\n Cachorro")
console.log(JSON.stringify(cachorro, null, 2)); // Saída do objeto Cachorro
console.log("\n animal exotico")
console.log(JSON.stringify(exotico, null, 2)); // Saída do objeto Exótico
