Nome: Thayssa Afonso Souza

1. Comece criando um objeto `gato` com notação literal. Ele deve ter propriedades para `nome`, `dataNascimento` (um objeto `Date`), `cor`, e um objeto de historicoMedico (com uma listagem de consultas e outra de vacinas), e um método `comunicar()` que faz o gatinho miar ou ronronar. Você também pode adicionar outras propriedades que quiser. Crie dois gatinhos seguindo esse modelo.

let gatinho1 = {
    nome: "Sininho",
    dataNascimento: new Date(2008, 05, 19),
    cor: "rajada",
    historicoMedico: {
        consultas: [],
        vacinas: []
    },
    comunicar: function(){
        console.log("Miau miau")
    }
};

let gatinho2 = {
   nome: "Adolfo",
    dataNascimento: new Date(2011, 06, 02),
    cor: "preto",
    historicoMedico: {
        consultas: [],
        vacinas: []
    },
    comunicar: () => console.log("Rrrrrrrr")
};


2. Modifique o objeto definido na questão anterior para ter uma nova propriedade `idade`. Ela deve ser um `getter` que utiliza a data de nascimento.

gatinho2 = {
    nome: "Adolfo",
    dataNascimento: new Date(2011, 06, 02),
    cor: "preto",
    historicoMedico: {
        consultas: [],
        vacinas: []
    },
    comunicar: function(){
        console.log("Rrrrrrrr");
    },
    get idade() {
        return new Date() - this.dataNascimento;
    }
};


3. **[Desafio]** Crie dois novos gatinhos e clone o conteúdo dos seus gatos originais para os novos objetos. Você consegue fazer isso **sem** que as referências de `historicoMedico` e `dataNascimento` dos novos objetos fiquem conectadas às propriedades dos objetos antigos?

4. Crie um construtor funcional para seu modelo de gato da questão 1. Ele deve incluir duas modificações: um método `examinar`, que adiciona a data de uma nova consulta ao histórico médico, e uma propriedade "fantasma" `vacinas` que na verdade é composta por um `getter` que lê do histórico médico e um `setter` que escreve no histórico.

function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
};

function FuncGatificadora(nomeDoGato, dataString, cor){
    const novoGato = {
        get vacinas() { return this.historico.vacinas },
        set vacinas(valor) { this.historico.vacinas.push(valor) }
    };

    novoGato.nome = nomeDoGato;
    novoGato.dataNascimento = new Date(dataString);
    novoGato.cor = cor;
    novoGato.cor = cor;
    novoGato.historico = new HistoricoMedico();
    novoGato.comunicar = () => console.log("ron ron ron");
    novoGato.examinar = function examinar(){
        this.historico.consultas.push(new Date());
    } 

    return novoGato;
};

let tobias = FuncGatificadora("Tobias", "2023-06-20", "cinza");


5. Agora, transforme seu construtor funcional em um prototipal. Você consegue perceber as melhorias? Acha que ele ficou mais ou menos legível?


6. **[Desafio]** Converta seu construtor da questão 5 para a estrutura pseudoclássica, mas modificando o histórico médico para ser seu próprio modelo também com um construtor pseudoclássico.

function HistoricoMedico(){
    this.consultas = [];
    this.vacinas = [];
};

function PseuGatificadora(nomeDoGato, dataString, cor){
    this.nome = nomeDoGato;
    this.dataString = new Date(dataString);
    this.cor = cor;
    this.historico = new HistoricoMedico();
};

PseuGatificadora.prototype.comunicar = () => console.log("ron ron ron");

PseuGatificadora.prototype.examinar = function examinar(dataConsulta) {
    this.historico.consultas.push(dataConsulta)
};

Object.defineProperty(PseuGatificadora.prototype, "vacinas", { get: function(){
    return this.historico.vacinas.push()
}});

Object.defineProperty(PseuGatificadora.prototype, "vacinas", { set: function(value){
    return this.historico.vacinas.push(value)
}});

tobias = new ProtGatificadora("Tobias", "2023-06-20", "cinza");