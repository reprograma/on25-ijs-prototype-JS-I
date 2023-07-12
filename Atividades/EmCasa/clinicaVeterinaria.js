//Katiene Firmina de Souza

function historicMedic() {
    this.consultations = [];
    this.vaccines = [],
    this.procedures = []
};

function vaccinate(vaccine) {
    this.historic.vaccines.push(vaccine);
};

function queries(querie) {
    this.historic.consultations.push(querie);

    this.historic.consultations.reverse();
};

function procedure(tipe, reason) {
    this.historic.procedures.push(tipe, reason);
};

function cat(name, age, color, castrated, external) {
    this.name = name,
    this.age = age,
    this.color = color
    this.castrated = castrated,
    this.external = external,
    this.historic = new historicMedic()
};

cat.prototype.meow = () => { console.log("Meow Meow") };

function dog(name, age, color, castrated, race) {
    this.name = name,
    this.age = age,
    this.color = color,
    this.castrated = castrated,
    this.race = race,
    this.historic = new historicMedic()
};

dog.prototype.yap = () => { console.log("Yap Yap") };

function exotic(name, age, color, kind) {
    this.name = name,
    this.age = age,
    this.color = color,
    this.kind = kind,
    this.historic = new historicMedic()

    const adultCheck = {
        get adultCalculator() {
            if (kind === "hamster" && age >= 2 || kind === "papagaio" && age >= 36 || kind === "calopsita" && age >= 18) {
                return {
                    adult: this.adult = true,
                };
            } else if (kind != "hamster" && kind != "papagaio" && kind != "calopsita") {
                return {
                    kind: "Animal não disponível na calculadora!"
                };
            } else {
                return {
                    adult: this.adult = false
                };
            };
        },
    };

    return adultCheck;
};

const mia = new exotic("mia", 36, "laranja", "ppagaio");
console.log(mia.adultCalculator);

