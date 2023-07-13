function historicoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [{
        tipo: [],
        motivo: []
    }]   
}

const metodos = {
    consultar: function consultar(dataConsulta) {
        this.historico.consultas.push(dataConsulta) = array

        return array.reverse() //ordem cronológica inversa
    },

    vacinar: function vacinar(tipoVacina) {
        return this.historico.vacina.push(tipoVacina)
    }
}

function gerandoGatos(nomeGato, idade, cor, castrado, externo) {
       const novoGato = {
            nomeGato,
            idade,
            cor,
            castrado,
            externo,
            historico: new historicoMedico(),
            miar: function() {
                console.log("Miau!")
            }
    }
    
    Object.assign(novoGato, metodos)

    return novoGato;
    
} 

function gerandoCachorro(nomeCachorro, idade, cor, castrado, raça) {
    const novoCachorro = {
         nomeCachorro,
         idade,
         cor,
         castrado,
         raça,
         historico: new historicoMedico(),
         miar: function()  {
             console.log("Au au au!")
         }
 }
 
 Object.assign(novoCachorro, metodos)
 
 return novoCachorro;
 
}

function gerandoExotico(nomeExotico, idade, cor, especie) {
    const novoExotico = {
         nomeExotico,
         idade,
         cor,
         especie,
         adulto,
         historico: new historicoMedico(),
         
         get adulto() {
            if(this.nomeExotico === "hamster" && this.idade > 2){
                return this.adulto = true;
            } else if(this.nomeExotico === "papagaio" && this.idade > 36) {
                return this.adulto = true;
            } else if(this.nomeExotico === "calopsita" && this.idade > 18) {
                return this.adulto = true;
            } else {
            return this.adulto = false;
         }
       }
    }
 
 Object.assign(novoExotico, metodos)
 
 return novoExotico;
 
}



    