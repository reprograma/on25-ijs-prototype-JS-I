    Nome: Dória Fernandes

    function historicoMedico() {
    this.consultas = [];
    this.vacinas = [];
  }

        function Doguinho(nome, idade, cor, castrado, raça) {
            this.nome = nome;
            this.idade = idade;
            this.cor = cor;
            this.castrado = castrado;
            this.raça = raça;
            this.historico = new historicoMedico();

    }

Doguinho.prototype.vacinar = function(vacina) {
  this.historico.vacinas.push(vacina);
};

Doguinho.prototype.consultas = function(consulta) {
  this.historico.consultas.unshift(consulta);
};

    Doguinho.prototype.latir = function() { console.log("Au Au")}

    jeca = new Doguinho ("Jeca",7,"preto", true ,"poodle")

    jeca.vacinar("raiva");

    jeca.consultas("20/10/2020");

    jeca.consultas("20/11/2021");


    function Gatinho(nome, idade, cor, castrado, raça, externo) {
            this.nome = nome
            this.idade = idade
            this.cor = cor
            this.castrado = castrado
            this.raça = raça
            this.externo = externo
            this.historico = new historicoMedico();

    }
    Gatinho.prototype.miar = function() { 
        console.log("Miau")
        }

    Gatinho.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
    };

    Gatinho.prototype.consultas = function(consulta) {
    this.historico.consultas.unshift(consulta);
    };

    Lua = new Gatinho ("Lua",3,"preta", true ,"Bombaim", false)

    Lua.vacinar("HIV");

    Lua.consultas("12/12/2020");

    Lua.consultas("20/12/2023");

    function Exotico(nome, idade, cor, especie) {
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;

    Object.defineProperty(Exotico, 'adulto', {
        get: function () {
            if (this.especie == 'hamster' && this.idade >= 2) {
                return true;
            }
            if (this.especie == "papagaio" && this.idade >= 3) {
                return true;
            }
            if (this.especie == "calopsita" && this.idade >= 18) {
                return true;
            }
            return false;


        }

    })
}

Exotico.prototype.vacinar = function (vacina) {
    this.historico.vacinas.push(vacina);
};

Exotico.prototype.consultas = function (consulta) {
    this.historico.consultas.unshift(consulta);
};

Bolotinha = new Exotico("Bolotinha", 3, "Laranja", "hamster")

Bolotinha.vacinar("HIV");

Bolotinha.vacinar("raiva");

Bolotinha.consultas("12/12/2019");

Bolotinha.consultas("20/12/2022");

// Louro = new Exotico("José", 4, "verde", "papagaio")

// Calopsita = new Exotico("Cacá", 4, "verde", "calopsita")




