
function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [{
        tipo: [],
        motivo: []
    }]
}

HistoricoMedico.prototype.vacinar = function(vacina) {this.vacinas.push(vacina); } 
HistoricoMedico.prototype.consultar = function(consultas) {this.consultas.unshift(consultas); } 

function Gatificadora(nome, idade, cor, castrado, externo){
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.castrado = castrado
    this.externo = externo
    this.historico = new HistoricoMedico()
}
Gatificadora.prototype.miar = function() { console.log("Miauuu")}

function CachorroLandia(nome, idade, cor, castrado, raca){
    this.nome = nome
    this.idade = idade
    this.cor = cor
    this.castrado = castrado
    this.raca = raca
    this.historico = new HistoricoMedico()
}
CachorroLandia.prototype.latir = function() { console.log("Guauu Guauu")}

function AnimaisExoticos(nome, idade, cor, especie){
    this.nome = nome,
    this.idade = idade,
    this.cor = cor,
    this.especie = especie,
    this.historico = new HistoricoMedico()
}

Object.defineProperty(AnimaisExoticos.prototype, "adulto", { 
    get(){
        if(this.especie === 'hamster'){
            return this.idade >=2;
        } else if (this.especie === 'papagaio'){
            return this.idade >= 36;
        } else if (this.especie === 'calopsita'){
            return this.idade >= 18;
        }else {
            return false;
        }
    }
})


// const amora = new Gatificadora("Amora", 15, "tigresa", true, false)
// amora.historico.vacinar("raiva")
// amora.historico

// const dinamo = new CachorroLandia("Dinamos", 10, "preto", false, false)
// dinamo.historico.vacinar("locos")
// amora.historico

// const fred = new AnimaisExoticos("Fred", 18, "amarela", "calopsita")
// fred.historico.vacinar("vitaminas")
// fred.historico
// fred.historico.consultar("nao dorme")
// fred.adulto