// Histórico Médico
function HistoricoMedico() {
  this.consultas = []
  this.vacinas = []
  this.procedimentos = []
}

function vacinar(vacina) {
  this.historico.vacinas.push(vacina)
}

function consultar(consulta) {
  this.historico.consultas.unshift(consulta)
}

// Objeto Gato
let gato = new CriarGato("Netuno", 7, "preto", true, false)
function CriarGato(nome, idade, cor, castrado, externo) {
  this.nome = nome
  this.idade = idade
  this.cor = cor
  this.castrado = castrado
  this.externo = externo
  this.historico = new HistoricoMedico()
  this.miar = MetodoGato.miar
  this.vacinar = vacinar
  this.consultar = consultar
}

const MetodoGato = {
  miar: function () {
    console.log("Minhau!")
  }
}

//Objeto Cachorro
let cachorro = new CriarCachorro("Lobo", 15, "preto e canela", true, "pastor alemão")
function CriarCachorro(nome, idade, cor, castrado, raca) {
  this.nome = nome
  this.idade = idade
  this.cor = cor
  this.castrado = castrado
  this.raca = raca
  this.historico = new HistoricoMedico()
  this.latir = MetodoCachorro.latir
  this.vacinar = vacinar
  this.consultar = consultar
}

const MetodoCachorro = {
  latir: function () {
    console.log("Au Au!")
  }
}


//Objeto Exóticos
let exotico = new CriarAnimalExotico("Zé", 19, "verde e amarelo", "papagaio")
function CriarAnimalExotico(nome, idade, cor, especie) {
  this.nome = nome
  this.idade = idade
  this.cor = cor
  this.especie = especie
  this.adulto = MetodoAnimalExotico.adulto
  this.historico = new HistoricoMedico()
  this.vacinar = vacinar
  this.consultar = consultar
}

exotico = {
  ...exotico,
  get adulto() {
    if(this.especie === "hamster") {
      return this.idade >= 2
    } else if(this.especie === "papagaio") {
      return this.idade >= 3
    } else if(this.especie === "calopsita") {
      return this.idade >= 18
    }
  }
}





