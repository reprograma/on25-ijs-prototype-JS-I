// Comece criando um objeto gato com notação literal. Ele deve ter propriedades para nome, dataNascimento (um objeto Date), cor, e um objeto de historicoMedico (com uma listagem de consultas e outra de vacinas), e um método comunicar() que faz o gatinho miar ou ronronar. Você também pode adicionar outras propriedades que quiser. Crie dois gatinhos seguindo esse modelo.

cachorro1 = {
    nome: 'Valentina',
    dataNascimento: new Date(2019, 2, 10),
    cor: 'frajola',
    historicoMedico: {
        consultas: ['10/10/2020', '10/10/2021'],
        vacinas: ['Vacina1', 'Vacina2']
    },
    comunicar: function() { console.log("au au") }
} 
 

cachorro2 = {
    nome: 'Dorinha',
    dataNascimento: new Date(2022, 2, 21),
    cor: 'Branca',
    historicoMedico: {
        consultas: ['10/03/2022', '10/04/2022','10/05/2022'],
        vacinas: ['Vacina1', 'Vacina2','Vacina3']
    },
    comunicar: function() { console.log("au au2") }
} 

console.log(cachorro1.historicoMedico.consultas);
cachorro2.comunicar()
console.log(cachorro1.dataNascimento)


// 2. Modifique o objeto definido na questão anterior para ter uma nova propriedade `idade`. Ela deve ser um `getter` que utiliza a data de nascimento.

cachorro12 = {
    nome: 'Valentina',
    dataNascimento: new Date(2019, 2, 10),
    cor: 'frajola',
    historicoMedico: {
        consultas: ['10/10/2020', '10/10/2021'],
        vacinas: ['Vacina1', 'Vacina2']
    },
    comunicar: () => { console.log("au au") },
    get idade () {
        const dif = new Date() - this.dataNascimento // diferença em milissegundos
        return (dif/1000/60/60/24/365).toFixed(0)
    }
}

ano = cachorro1.dataNascimento.getFullYear()
mes = cachorro1.dataNascimento.getMonth()
dia = cachorro1.dataNascimento.getDate()

console.log(cachorro12.idade)