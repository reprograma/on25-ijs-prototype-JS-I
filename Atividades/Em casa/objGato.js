const gato = {
    nome: 'Blanc',
    dataDeNasc: new Date(2014, 7, 4),
    cor: 'branco',
    historicoMedico: {
        vacina: [],
        castrado: [],
    },
    miar : () => console.log('MIAU')   
}
console.log(gato.miar())

const gato2 = {...gato}
gato2.nome = 'Pxon'
gato2.dataDeNasc = (new Date(2020, 3, 5))
gato2.cor = 'preto'
//console.log(gato2)
//console.log('IDADE: '(Date.now() - gato2.dataDeNasc) )

const gato3 = {
    nome: 'Botão',
    dataDeNasc: (new Date(2017, 2, 24)),
    cor: 'siamês',
    historicoMedico: {
        vacina: [],
        castrado: [],
    },
    miar : () => console.log('MIAU')
}
//console.log(gato3)

const gato4 = {
    nome: 'Menina',
    dataDeNasc: new Date(2020, 2, 16),
    cor: 'tigrada',
    historicoMedico: {
        vacina: [],
        castrado: [],
    },
    miar : () => console.log('MIAU'),   
    
    get idade() {
        const data = gato4.dataDeNasc.getTime()
        const data1 = new Date ().getTime()
        const dif = data1 - data
      
      return dif / 31557600000
      
    },
}
console.log(gato4.idade)



// const gato4 = { ...gato3, idade: 42,
//     get idadeRelativa() {
//        return this.idade / 12 * 7
//     }}
// ;