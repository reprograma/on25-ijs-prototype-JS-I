#### Homework ####
Nome: Ciane Aparecida Pereira

``Construtor histórico médico``
function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

``Construtor Gato``

function FazedoraDeGato(nome, idade, cor, castrado, externo) {
    this.nome = nome;     
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.externo = externo;
    this.historico = new HistoricoMedico;
};

    FazedoraDeGato.prototype.miar = function () {
        console.log("Miauu");
        };

    FazedoraDeGato.prototype.vacinar = function (vacina) {
        this.historico.vacinas.push(vacina);
    };

    FazedoraDeGato.prototype.consultar = function (date) {
        this.historico.consultas.push(date);
    };

    FazedoraDeGato.prototype.procedimento = function (tipo, motivo) {
        this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
    };

    let nicolau = new FazedoraDeGato("Nicolau", 2, "cinza", true, true);
    nicolau.vacinar("raiva");
    nicolau.consultar(new Date (2023, 7, 11));
    nicolau.procedimento("ultrassom", "dores");
    
``Construtor Cachorro``

function FazedoraDeCachorro(nome, idade, cor, castrado, raca) {
    this.nome = nome;     
    this.idade = idade;
    this.cor = cor;
    this.castrado = castrado;
    this.raca = raca;
    this.historico = new HistoricoMedico;
};

    FazedoraDeCachorro.prototype.latir = function () {
        console.log("Au Au");
        };

    FazedoraDeCachorro.prototype.vacinar = function (vacina) {
        this.historico.vacinas.push(vacina);
    };

    FazedoraDeCachorro.prototype.consultar = function (date) {
        this.historico.consultas.push(date);
    };

   FazedoraDeCachorro.prototype.procedimento = function (tipo, motivo) {
        this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
    };

    let reina = new FazedoraDeCachorro("Reina", 8, "branca", false, "Boxer");
    reina.vacinar("leishmaniose");
    reina.consultar(new Date (2023, 7, 11));
    reina.procedimento("coleta sangue", "exame de rotina");

``Construtor Animal Exótico``

function FazedoraDeExotico(nome, idade, cor, especie, adulto) {
    this.nome = nome;     
    this.idade = idade;
    this.cor = cor;
    this.especie = especie;
    this.adulto = adulto;   
    this.historico = new HistoricoMedico;    
};

    FazedoraDeExotico.prototype.vacinar = function (vacina) {
        this.historico.vacinas.push(vacina);
    };

    FazedoraDeExotico.prototype.consultar = function (date) {
        this.historico.consultas.push(date);
    };

    FazedoraDeExotico.prototype.procedimento = function (tipo, motivo) {
        this.historico.procedimentos.push({ tipo: tipo, motivo: motivo });
    };

    Object.defineProperty(FazedoraDeExotico.prototype, "verificarAdulto", {
        get: function () {
            if (this.especie === "hamster") {
                if (this.idade >= 2) {
                   this.adulto = true; 
                } else {
                    this.adulto = false; 
                }
            }
             if (this.especie === "papagaio") {
                if (this.idade >= 36) {
                   this.adulto = true; 
                } else {
                    this.adulto = false; 
                }
            }
             if (this.especie === "calopsita") {
                if (this.idade >= 18) {
                   this.adulto = true; 
                } else {
                    this.adulto = false; 
                }
            }
        }

    });
