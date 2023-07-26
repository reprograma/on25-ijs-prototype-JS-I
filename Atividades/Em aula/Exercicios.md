Nome: 

1. Comece criando um objeto `gato` com notação literal. Ele deve ter propriedades para `nome`, `dataNascimento` (um objeto `Date`), `cor`, e um objeto de historicoMedico (com uma listagem de consultas e outra de vacinas), e um método `comunicar()` que faz o gatinho miar ou ronronar. Você também pode adicionar outras propriedades que quiser. Crie dois gatinhos seguindo esse modelo.
```
let gato1 = {
    nome: "Nina",
    dataNascimento: new Date(2022, 0, 18),
    cor: "frajola",
    historico: {
        consultas: [],
        vacinas: [],
    },
    ronronar: () => console.log("ron ron ron")
}

let gato2 = {
    nome: "Chris",
    dataNascimento: new Date(2020, 6, 20),
    cor: "branco e cinza",
    historico: {
        consultas: [],
        vacinas: [],
    },
    ronronar: () => console.log("ron ron ron")
}
```

2. Modifique o objeto definido na questão anterior para ter uma nova propriedade `idade`. Ela deve ser um `getter` que utiliza a data de nascimento.
```
gato1 = {
    nome: "Nina",
    dataNascimento: new Date(2022, 0, 18),
    cor: "frajola",
    historico: {
        consultas: [],
        vacinas: [],
    },
    ronronar: () => console.log("ron ron ron"),
    get idade() {
        return `${this.nome} tem ${new Date().getFullYear() - this.dataNascimento.getFullYear()} anos.`
    }
}
```

3. **[Desafio]** Crie dois novos gatinhos e clone o conteúdo dos seus gatos originais para os novos objetos. Você consegue fazer isso **sem** que as referências de `historicoMedico` e `dataNascimento` dos novos objetos fiquem conectadas às propriedades dos objetos antigos?
```
function clonaGatinhos(gatoOriginal) {
    const cloneGato = {}
    for (propriedade in gatoOriginal) {
        if(!(propriedade instanceof Object)) {
            // é um tipo primitivo
            cloneGato[propriedade] = gato[propriedade]
        } else  if (!(propriedade instanceof Function)) {
            // objeto, mas não método
            cloneGato[propriedade] = JSON.parse(JSON.stringify(gatoOriginal[propriedade]))
        } else { // métodos
            cloneGato[propriedade] = gatoOriginal[propriedade].bind(cloneGato)
        }
    }
    return cloneGato
}
```

4. Crie um construtor funcional para seu modelo de gato da questão 1. Ele deve incluir duas modificações: um método `examinar`, que adiciona a data de uma nova consulta ao histórico médico, e uma propriedade "fantasma" `vacinas` que na verdade é composta por um `getter` que lê do histórico médico e um `setter` que escreve no histórico.
// Criando um histórico médico
```
function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
}
```

// Criando um construtor que usa o histórico
```
function FuncGatificadora(nomeDoGato, dataString, cor) {
    const novoGato = {
        get vacinas() { return this.historico.vacinas }
        set vacinas(valor) { this.historico.vacinas.push(valor) }
        }
    }

    novoGato.nome = nomeDoGato
    novoGato.dataNascimento = new Date(dataString)
    novoGato.cor = cor
    novoGato.historico = new HistoricoMedico()
    novoGato.comunicar = () => console.log("ron ron ron")
    novoGato.examinar = function examinar(dataDaConsulta) {
        this.historico.consultas.push(dataDaConsulta)
    }

    return novoGato;
}

tobias = FuncGatificadora("Tobias", "2003-06-20", "cinza")
```

5. Agora, transforme seu construtor funcional em um prototipal. Você consegue perceber as melhorias? Acha que ele ficou mais ou menos legível?
```
const metodosGato= {
    comunicar: () => console.log("ron ron ron"),
    examinar: () => function examinar(dataDaConsulta) {
        this.historico.consultas.push(dataDaConsulta)
    },
    get vacinas() { return this.historico.vacinas },
    set vacinas(valor) { this.historico.vacinas.push(valor) }
}

function ProtoGatificadora(nomeDoGato, dataString, cor) {
    const novoGato = Object.create(metodosGato)

    novoGato.nome = nomeDoGato
    novoGato.dataNascimento = new Date(dataString)
    novoGato.cor = cor
    novoGato.historico = new HistoricoMedico()

    return novoGato;
}
```

6. **[Desafio]** Converta seu construtor da questão 5 para a estrutura pseudoclássica, mas modificando o histórico médico para ser seu próprio modelo também com um construtor pseudoclássico.

// Criando um histórico médico
```
function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
}
```

// Criando um construtor que usa o histórico
```
function PseuGatificadora(nomeDoGato, dataString, cor) {
    this.nome = nomeDoGato
    this.dataNascimento = new Date(dataString)
    this.cor = cor
    this.historico = new HistoricoMedico()
}

// Adicionamos os métodos ao Prototype
PseuGatificadora.prototype.comunicar = () => console.log("ron ron ron")
PseuGatificadora.prototype.examinar = function(dataConsulta) {
    this.historico.consultas.push(dataConsulta)
}

Object.defineProperty(PseuGatificadora.prototype, "vacina", { get: function() {
    return this.historico.vacinas
}})

Object.defineProperty(PseuGatificadora.prototype, "vacinas", { set: function(value) {
    this.historico.vacinas.push(value)
}})

tobias = new PseuGatificadora("Tobias", "2003-06-20", "cinza")
```