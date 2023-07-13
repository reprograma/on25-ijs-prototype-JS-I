
function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
}


// CriaGatinho

function CriaGatinho(nome, idade, cor, castrado, externo) {
        this.nome = nome,
        this.idade = idade,
        this.cor = cor,
        this.castrado = castrado,
        this.externo = externo,
        this.historico = new HistoricoMedico()
    }
    

CriaGatinho.prototype.miar = () => console.log("Miau");

JavaScript = new CriaGatinho("JavaScript", "36", "preta", "true", "false")

CriaGatinho.prototype.consultar = function(dataString) {
    this.historico.consultas.unshift(dataString);
}

JavaScript.consultar("2023-10-16")
JavaScript.historico.consultas.unshift("2021-02-15")
JavaScript.historico.consultas.unshift("2022-06-18")
JavaScript.historico.consultas.unshift("2023-05-19")


CriaGatinho.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
}

JavaScript.vacinar("raiva")
JavaScript.vacinar("V8")
JavaScript.historico.vacinas.push("gripe"); 



//CriaCachorro

function CriaCachorro(nome, idade, cor, raca, castrado) {
         this.nome = nome,
         this.idade = idade,
         this.cor = cor,
         this.raca = raca,
         this.castrado = castrado,
         this.historico = new HistoricoMedico()
}


CriaCachorro.prototype.latir = () => console.log("Au, Au, Au");
    

Await = new CriaCachorro("Await", 36, "cinza", "Bulldog", true)


CriaCachorro.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
}

Await.vacinar("raiva")
Await.vacinar("gripe") 

CriaCachorro.prototype.consultar = function(dataString) {
    this.historico.consultas.unshift(dataString);
}

Await.consultar("2023-15-08") 
Await.historico.consultas.unshift("2022-07-20")
Await.historico.consultas.unshift("2021-03-20")


// CriaExotico

function CriaExotico(nome, idade, cor, especie) {
    this.nome = nome,
    this.idade = idade,
    this.cor = cor,
    this.especie = especie,
    this.historico = new HistoricoMedico()
}

Array = new CriaExotico("Array", 11, "branco", "coelho")
   

CriaExotico.prototype.vacinar = function(vacina) {
    this.historico.vacinas.push(vacina);
}

Array.vacinar("raiva")
Array.vacinar("gripe")

CriaExotico.prototype.consultar = function(dataString) {
    this.historico.consultas.unshift(dataString);
}

Array.consultar("2022-08-21")
Array.consultar("2023-04-16") 



Object.defineProperty(CriaExotico.prototype, 'adulto', {
    get: function() {
        if(this.especie == "coelho") {
            return this.idade >= 12;
        } else if (this.especie == "papagaio") {
            return this.idade >= 36;
        } else if (this.especie == "calopsita") {
            return this.idade >= 18;
        } else {
            return false
        }
    }
});
