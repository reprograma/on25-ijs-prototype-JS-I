    Nome: Dória Fernandes

    const metodoMed = {
        vacinar: function(vacina){
        this.historicoMedico.vacinas.push(vacina);
        },
        consultas: function(consulta){
            this.historicoMedico.consultas.unshift(consulta);
        },
    };

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
            this.idade = idade * 12
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

    function Exotico (nome, idade, cor, especie, adulto){
                this.nome = nome
                this.idade = idade
                this.cor = cor
                this.especie = especie
                this.adulto = adulto
    }

    Fox = new Exotico ("Fox", 3, "Laranja", "Raposa", true)


