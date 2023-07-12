function Gatificador(nomeDoGato) {
    const novoGato = {}
    novoGato.nome = nomeDoGato,
    novoGato.miar = function() {
        console.log("Miau")
    }
    return novoGato
};

let  princeso = Gatificador("Princeso III")