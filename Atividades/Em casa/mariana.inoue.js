const arr1 = [
    {
        date: new Date(2022, 1, 24).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
        }),
    },
    {
        date: new Date(2027, 1, 24).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
        }),
    },
    {
        date: new Date(2023, 1, 24).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
        }),
    },
];



const arrayOfDates = [
    "12/01/2020",
    "12/25/2016",
    "12/26/2019",
    "12/26/2022",
    "12/26/2021",
    "12/26/2017",
];


function HealthHistory() {

    this.vaccines = [];
    this.procedure = [];
    this.checkup = [];
}

HealthHistory.prototype.checkup = arrayOfDates.sort(
    (dateA, dateB) => new Date(dateB) - new Date(dateA)
),

HealthHistory.prototype.procedure = function (procedureType){
    this.HealthHistory.procedure.push(procedureType)
}

HealthHistory.prototype.vaccines =  function (vaccinesType){
    this.HealthHistory.vaccines.push(vaccinesType)
}

    function CatCreator(name, age, color, castrated) {

        this.name = name;
        this.age = age;
        this.color = color;
        this.castrated = castrated;
        this.HealthHistory = new HealthHistory();

    }

CatCreator.prototype.meow = function () {
    console.log("Miau");
},


    function DogCreator(name, age, color, castrated) {

        this.name = name;
        this.age = age;
        this.color = color;
        this.castrated = castrated;
        this.HealthHistory = HealthHistory;

    }

DogCreator.prototype.bark = function () {
    console.log('Au Au')
}

function MouseCreator(name, age, color, species) {

    this.name = name;
    this.age = age;
    this.color = color;
    this.species = species;
    this.HealthHistory = new HealthHistory();

}

MouseCreator.prototype.exoticMethod = {
    get isAdult() {
        if (this.species == 'mouse') {

            if (this.age >= 2) {
                return true;
            } else {
                return false;
            }
        } else if (this.species == 'parrot') {

            if (this.age >= 36) {
                return true;
            } else {
                return false;
            }
        } else if (this.species == 'cockatiel') {

            if (this.age >= 18) {
                return true;
            } else {
                return false;
            }
        } else return null

    }
}


let klaus = MouseCreator("Klaus", 1, "laranja", "parrot");


console.log(klaus);

// let lua = CatCreator(
//     "Lua",
//     1,
//     "black",
//     true,
//     HealthHistory(
//         ["Raiva", "Giardia"],
//         [
//             { tipo: "Fisiotherapy", reason: "luxation legs" },
//             { tipo: "ultrassom", motivo: "pain" },
//         ]
//     )
// );

// let filomena = DogCreator("Filó", 1, "laranja", true);

// filomena.HealthHistory.vaccines = ["gripe", "v10", "Raiva", "Giardia"];
// filomena.HealthHistory.procedure = [
//     { tipo: "Fisiotherapy", reason: "luxation legs" },
//     { tipo: "ultrassom", motivo: "dores" },
// ];
// filomena.HealthHistory.checkup = [
//     "12/01/2020",
//     "12/25/2016",
//     "12/26/2019",
//     "12/26/2022",
//     "12/26/2021",
//     "12/26/2017",
// ];

let filomena = new DogCreator("Filózinha", 1, "laranja", true);

filomena.HealthHistory.vaccines = ["gripe", "v10", "Raiva", "Giardia",'F'];
filomena.HealthHistory.procedure = [
    { tipo: "Fisiotherapy", reason: "luxation legs" },
    { tipo: "ultrassom", motivo: "dores na patela" },
];
filomena.checkup = [
    "12/01/2020",
    "12/25/2016",
    "12/26/2019",
    "12/26/2022",
    "12/26/2021",
    "12/26/2000",
];
console.log(lua);
console.log(filomena);