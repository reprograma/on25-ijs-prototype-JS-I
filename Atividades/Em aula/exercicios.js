
// criar um objeto `gato`. Ele deve ter propriedades para `nome`, `dataNascimento` (um objeto `Date`), `cor`, e um objeto de historicoMedico, e um método `comunicar()`.

const gato = {
    nome: "Jujuba",
    cor: "frajola",
    dataNascimento: new Date(2018, 7, 21), 
    historicoMedico: {
        consultas: [], 
        vacinas: [],
        castrado: true},
    miar: function() { console.log("miau") },  
    get idade () {
        const dif = new Date() - 
        this.dataNascimento.getTime() 
        return dif/(1000*60*60*24*30)
    }

}

// Modifique o objeto definido na questão anterior para ter uma nova propriedade `idade`. Ela deve ser um `getter` que utiliza a data de nascimento.

