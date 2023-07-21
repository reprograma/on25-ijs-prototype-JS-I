function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
    this.procedimento = [{
        tipo: "",
        motivo: ""
    }]
};

function Gatos(nome, idade, cor, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
};

Gatos.prototype.miar = () => console.log("MIAU");
Gatos.prototype.consultar = function(dataConsulta) {
    this.historico.consultas.push(dataConsulta);
    this.historico.consultas.unshift(dataConsulta);
};
Gatos.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina)
}
Gatos.prototype.procedimento = function(tipo, motivo) {
    this.historico.procedimento.push(tipo, motivo);
}

function Dogs(nome,idade, raca, castrado) {
    this.nome = nome;
    this.idade = idade;
    this.raca = raca;
    this.castrado = castrado;
    this.historico = new HistoricoMedico();
};

Dogs.prototype.latir = () => console.log("AU AU");
Dogs.prototype.consultar = function(dataConsulta) {
    this.historico.consultas.push(dataConsulta);
    this.historico.consultas.unshift(dataConsulta);
};
Dogs.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina)
}
Dogs.prototype.procedimento = function(tipo, motivo) {
    this.historico.procedimento.push(tipo, motivo)
}

function Exoticos(nome, idade, especie, cor) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.historico = new HistoricoMedico();
};

Exoticos.prototype.consultar = function(dataConsulta) {
    this.historico.consultas.push(dataConsulta)
};
Exoticos.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
    this.historico.consultas.unshift(dataConsulta);
}
Exoticos.prototype.procedimento = function(tipo, motivo) {
    this.historico.procedimento.push(tipo, motivo)
}

Object.defineProperty(Exoticos.prototype, 'adulto', {
    get: function() {
        if(this.especie == "hamster") {
            return this.idade >= 2;
        } else if (this.especie == "papagaio") {
            return this.idade >= 36;
        } else if (this.especie == "calopsita") {
            return this.idade >= 18;
        } else {
            return false
        }
    }
});


let hamster = new Exoticos("Bob", 3, "hamster", "cinza");
hamster.adulto;
hamster.consultar("2023-07-12");

let nida = new Gatos("Nida", 16, "preto e laranja", true);
nida.vacinar("v8");
nida.consultar("2022-07-12");
nida.consultar("2021-09-01");
nida.consultar("2021-08-15");
nida.procedimento("ultrasson", "dores");

let saroo = new Dogs("Saroo", 60, "Yorkshire", true);
saroo.vacinar("raiva");
saroo.consultar("2022-10-10");
saroo.consultar("2022-09-01");
saroo.consultar("2022-08-15");
saroo.procedimento("raio-x", "mancando");
