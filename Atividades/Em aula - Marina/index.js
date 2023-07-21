//1 e 2
let gato1 = {
  nome: "Miau",
  dataNascimento: new Date(2023, 3, 1),
  cor: "branca",
  historicoMedico: {
    consultas: [],
    vacinas: [],
  },
  comunicar: () => console.log("miau miau"),
  get idade() {
    const dif = new Date() - this.dataNascimento.getTime();
    return dif / (1000 * 60 * 24 * 30);
  },
};

//4

function HistoricoMedico() {
  this.consultas = [];
  this.vacinas = [];
}

//instanciação funcional
function FuncGatificadora(nomeDoGato, dataString, cor) {
  const novoGato = {
    get vacinas() {
      return this.historico.vacinas;
    },
    set vacinas(valor) {
      this.historico.vacinas.push(valor);
    },
  };
  novoGato.nome = nomeDoGato;
  novoGato.dataNascimento = new Date(dataString);
  novoGato.cor = cor;
  novoGato.historico = new HistoricoMedico();
  novoGato.comunicar = () => console.log("ron ron ron");
  novoGato.examinar = function examinar(dataConsulta) {
    this.historico.consultas.push(dataConsulta);
  };

  return novoGato;
}

tobias = FuncGatificadora("Tobias", "2003-05-20", "cinza");
//tobias.examinar()
//tobias.vacinas = "raiva"

//6. construtor pseudoclássica
function PseuGatificadora(nomeDoGato, dataString, cor) {
  this.nome = nomeDoGato;
  this.dataNascimento = new Date(dataString);
  this.cor = cor;
  this.historico = new HistoricoMedico();
}

PseuGatificadora.prototype.comunicar = () => {
  console.log("ron ron ron");
};
PseuGatificadora.prototype.examinar = function (dataConsulta) {
  this.historico.consultas.push(dataConsulta);
};
Object.defineProperty(PseuGatificadora.prototype, "vacina", {
  get: function () {
    return this.historico.vacinas;
  },
});

tobias = new PseuGatificadora("Tobias", "2003-05-20", "cinza");
//tobias.examinar("15/05/2023")
//tobias.vacinas

/**
 * function PseuGatificadora(nomeDoGato, dataString, cor) {
    this.nome = nomeDoGato
    this.dataNascimento = new Date(dataString)
    this.cor = cor
    this.historico = new HistoricoMedico()
}

// Adicionamos os métodos ao Prototype
PseuGatificadora.prototype.comunicar = () => console.log("ron ron ron")
PseuGatificadora.prototype.examinar = function(dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

Object.defineProperty(PseuGatificadora.prototype, "vacina", { get: function() {
    return this.historico.vacinas
}})
Object.defineProperty(PseuGatificadora.prototype, "vacinas", { set: function(value) {
    return this.historico.vacinas.push(value)
}})

tobias = new PseuGatificadora("Tobias", "2003-06-20", "cinza")
tobias.vacinas = "raiva"
 */
