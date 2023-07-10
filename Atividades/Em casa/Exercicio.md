Nome: Dória Fernandes

    function Doguinho(nome, idade, cor, castrado, raca) {
        this.nome = nome
        this.idade = idade
        this.cor = cor
        this.castrado = castrado
        this.raca = raca

}
Doguinho.prototype.latir = function() { console.log("Au Au")}

jeca = new Doguinho ("Jeca",7,"preto", true ,"poodle")

    function Gatinho(nome, idade, cor, castrado, raça, externo) {
            this.nome = nome
            this.idade = idade
            this.cor = cor
            this.castrado = castrado
            this.raça = raça
            this.externo = externo

    }
    Gatinho.prototype.miar = function() { console.log("Miau")}

    Lua = new Gatinho ("Lua",3,"preta", true ,"Bombaim", false)

function Exotico (nome, idade, cor, especie, adulto){
            this.nome = nome
            this.idade = idade
            this.cor = cor
            this.especie = especie
            this.adulto = adulto
}

Fox = new Exotico ("Fox", 3, "Laranja", "Raposa", true)


