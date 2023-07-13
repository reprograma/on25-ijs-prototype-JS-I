// Nome: Laíssa Saraiva

const gato = {
  nome:"Mimi",
  dataDeNascimento: new Date(1998, 7, 12),
  cor: "amarelo",
  historicoMedico: {
    consultas: [],
    vacinas: []
  },
  miar() {
    console.log("Miau!")
  }
}


console.log(gato.miar());

// gato = {
//   nome:"Mimi",
//   dataDeNascimento: new Date(1998, 7, 12),
//   cor: "amarelo",
//   historicoMedico: {
//     consultas: [],
//     vacinas: []
//   },
//   miar() {
//     console.log("Miau!")
//   },
//   get idade(){
//     const diferenca = new Date() - this.dataDeNascimento.getTime();
//     return new Date(diferenca);
//   }
// }

// 4

// Construtor para histórico Medico
function HistoricoMedico() {
  this.consultas = [];
}
// instanciação funcional
function FuncGatificadora(nomeDoGato, dataString, cor) {
  const novoGato = {
    get vacinas() { return this.historico.vacinas},
    set vacinas(valor) {this.historico.vacinas.push(valor) }
  }

  novoGato.nome = nomeDoGato
  novoGato.dataNascimento = new Date(dataString)
  novoGato.cor = cor
  novoGato.historico = new HistoricoMedico()
  novoGato.comunicar = () => console.log("ron ron ron");
  novoGato.examinar = function examinar (dataDaConsulta) {
    this.historico.consultas.push(dataDaConsulta);
  }
  return novoGato
}

let tobias = FuncGatificadora("Tobias", "2003-06-12", "cinza")
tobias.examinar();
console.log(tobias.historico)
tobias.vacina = "raiva";
// 5

tobias = new FuncGatificadora("Mimi", "2005-08-20", "cinza")


```
function PseuGatificadora(nomeDoGato, dataString, cor) {
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

tobias = new PseuGatificadora("Tobias", "2003-06-20", "cinza")
```