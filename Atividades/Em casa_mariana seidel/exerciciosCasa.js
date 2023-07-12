
function HistoricoMedico() {
    this.consultas = [],
    this.vacinas = [],
    this.procedimentos = [{
        tipo: '',
        motivo: ''
    }]
}


const metodosGatos = {
    miar: function() {console.log("Miau")},
}

const metodosCachorros = {
    latir: function() {console.log("Au au")},
}

HistoricoMedico.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina)
}

HistoricoMedico.prototype.consultar = function(data) {
    this.historico.consultas.unshift(data)
}

HistoricoMedico.prototype.procedimentos = function(tipo, motivo) {
    this.historico.procedimentos.push({tipo: tipo, motivo: motivo})
}


function addGato(nome, idade, cor, castrado, externo) {
    const novoGato = Object.create(metodosGatos)
    novoGato.nome = nome
    novoGato.idade = idade
    novoGato.cor = cor
    novoGato.castrado = castrado
    novoGato.externo = externo
    novoGato.historico = new HistoricoMedico()

    return novoGato
}

oreo = addGato ('Oreo', 84, 'preto e branco', false, true)
oreo.historico.consultas.unshift('10/02/2022')
oreo.historico.consultas.unshift('23/05/2023')
oreo.historico.consultas.unshift('25/07/2023')


function addCachorro(nome, idade, cor, castrado, raça) {
    const novoCachorro = Object.create(metodosCachorros)
    novoCachorro.nome = nome
    novoCachorro.idade = idade
    novoCachorro.cor = cor
    novoCachorro.castrado = castrado
    novoCachorro.raça = raça
    novoCachorro.historico = new HistoricoMedico()

    return novoCachorro
}

milka = addCachorro ('Milka', 48, 'cinza', true, 'buldogue francês')
milka.historico.vacinas.push('raiva')


function addExotico(nome, idade, cor, especie, adulto) {
    const novoExotico = {
        get adulto () {
            if(this.especie === 'hamster' && this.idade < 2) {
                return this.adulto = false
            } else if (this.especie === 'papagaio' && this.idade < 36) {
                return this.adulto = false
            } else if (this.especie === 'calopsita' && this.idade < 18) {
                return this.adulto = false
            } else {
                return this.adulto = true
            }
        }}

    novoExotico.nome = nome
    novoExotico.idade = idade
    novoExotico.cor = cor
    novoExotico.especie = especie
    novoExotico.adulto = adulto
    novoExotico.historico = new HistoricoMedico()

    return novoExotico
}

lourinho = addExotico ('Lourinho', 240, 'verde, amarelo e vermelho', 'papagaio')
hamtaro = addExotico ('Hamtaro', 1, 'branco e marrom', 'hamster')
bubi = addExotico ('Bubi', 20, 'amarela', 'calopsita')

