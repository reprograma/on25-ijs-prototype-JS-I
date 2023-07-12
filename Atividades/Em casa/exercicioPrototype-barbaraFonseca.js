// Gato:

function gatos(nome, idade, cor, castrado) {
    const historicoMedico = {
        vacinas: [],
        consultas: [],
        procedimentos: []
    }
   
    const gato = { 
        nome,
        idade,
        cor,
        castrado,
        historico: historicoMedico,
        miar: function() { console.log("Miau")},
        vacinar: function vacinar(vacina) {
            this.historico.vacinas.push(vacina)
        },
        consultar: function consultar(consulta) {
            this.historico.consultas.push(consulta)
        }
    }

    return gato
};

let Marrie = gatos("Marrie", 10, "branca", true)
Marrie.vacinar("raiva")
Marrie.miar()
Marrie.consultar("14/06/2023")
Marrie.consultar("09/07/2023")
console.log(Marrie)



// Cachorro

function cachorros(nome, idade, cor, castrado) {
    const historicoMedico = {
        vacinas: [],
        consultas: [],
        procedimentos: []
    }
    
    const cachorro = { 
        nome,
        idade,
        cor,
        castrado,
        historico: historicoMedico,
        latir: function() { console.log("AU AU")},
        vacinar: function vacinar(vacina) {
            this.historico.vacinas.push(vacina)
        },
        consultar: function consultar(consulta) {
            this.historico.consultas.push(consulta)
        }
    }

    return cachorro
};

let Jonny = cachorros("Jonny", 8, "branco e marrom", false)
Jonny.latir()
Jonny.vacinar("gripe")
Jonny.vacinar("raiva")
Jonny.consultar("10/04/2023")
console.log(Jonny)
// tem que passar uma vacina por vez, não dá para colocar mais de uma ao mesmo tempo

// Animais Exóticos

function exoticos(nome, idade, cor, especie) {
    const historicoMedico = {
        vacinas: [],
        consultas: [],
        procedimentos: []
    }
    
    const calopsita = { 
        nome,
        idade,
        cor,
        especie,
        get adulto() {
            return (this.idade > 18)
        },
        historico: historicoMedico,
        piar: function() {console.log("PIU PIU")},
        vacinar: function vacinar(vacina) {
            this.historico.vacinas.push(vacina)
        },
        consultar: function consultar(consulta) {
            this.historico.consultas.push(consulta)
        }
    }

    return calopsita
};

let Ed = exoticos("Ed", 22, "branco e amarelo", "calopsita")
Ed.piar()
Ed.consultar("30/30/2023")
console.log(Ed)
console.log(Ed.adulto)
