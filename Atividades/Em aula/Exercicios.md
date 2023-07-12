Nome: 

1. Comece criando um objeto `gato` com notação literal. Ele deve ter propriedades para `nome`, `dataNascimento` (um objeto `Date`), `cor`, e um objeto de historicoMedico (com uma listagem de consultas e outra de vacinas), e um método `comunicar()` que faz o gatinho miar ou ronronar. Você também pode adicionar outras propriedades que quiser. Crie dois gatinhos seguindo esse modelo.

2. Modifique o objeto definido na questão anterior para ter uma nova propriedade `idade`. Ela deve ser um `getter` que utiliza a data de nascimento.

3. **[Desafio]** Crie dois novos gatinhos e clone o conteúdo dos seus gatos originais para os novos objetos. Você consegue fazer isso **sem** que as referências de `historicoMedico` e `dataNascimento` dos novos objetos fiquem conectadas às propriedades dos objetos antigos?

4. Crie um construtor funcional para seu modelo de gato da questão 1. Ele deve incluir duas modificações: um método `examinar`, que adiciona a data de uma nova consulta ao histórico médico, e uma propriedade "fantasma" `vacinas` que na verdade é composta por um `getter` que lê do histórico médico e um `setter` que escreve no histórico.

5. Agora, transforme seu construtor funcional em um prototipal. Você consegue perceber as melhorias? Acha que ele ficou mais ou menos legível?

6. **[Desafio]** Converta seu construtor da questão 5 para a estrutura pseudoclássica, mas modificando o histórico médico para ser seu próprio modelo também com um construtor pseudoclássico.

1. let gato1 = {
    nome: "Felícia",
    dataNascimento: new Date(2021, 07, 01),
    cor: "cinza",
    historicoMedico: {
        consultas: [],
        vacinas: [],
    },
    miar: () => console.log("Miau")
      
}

function historicoMedico(){
    this.consultas = [];
    this.vacinas = [];
}

function FuncGatificadora(nomeDeGato, dataString, cor){
    const novoGato = {
        get vacinas(){
            return this.historico.vacinas
            }
        set vacinas(valor){
            this.historico.vacinas.push(valor)
        }
        }
    novoGato.nome = nomeDoGato
    novoGato.dataNascimento = new Date(dataString)
    novoGato.cor = cor
    novoGato.historico = new historicoMedico
    novoGato.comunicar = () => console.log("ron ron ron")
    novoGato.examinar = () => function examinar(dataConsulta) {
        this.historico.consultas.push(dataConsulta)
    }

    return novoGato
}

tobias.vacinas = ["raiva"]

----PSEUDOCLASSICO

function FuncGatificadora(nomeDeGato, dataString, cor){
    this.nome = nomeDoGato
    this.dataNascimento = new Date(dataString)
    this.cor = cor
    this.historico = new historicoMedico
    
}

FuncGatificadora.prototype.comunicar = () => => {
    console.log("ronronr")
}

FuncGatificadora.prototype.examinar = function(dataConsulta){
    this.historico.consultas.push(dataConsulta)
}

tobias.examinar(new Date())
tobias.historico.consultas

tobias = new FunctGatificadora("Tobias", "2023-06-28", "cinza")

get vacinas(){
        return this.historico.vacinas
    }

Object.defineProperty(FuncGatificadora.prototype, "vacina", {get: function(){
    return this.historico.vacinas
}})

Object.defineProperty(FuncGatificadora.prototype, "vacina", {
    set: function(value){
        this.historica.vacinas.push(value)
    }
})