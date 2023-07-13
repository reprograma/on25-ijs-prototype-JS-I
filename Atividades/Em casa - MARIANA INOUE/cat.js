function HealthHistory() {
    this.vaccines = [];
    this.procedure = [];
    this.checkup = [];
  }
  
  HealthHistory.prototype.procedure = function (procedureType) {
    this.HealthHistory.procedure.push(procedureType);
  };
  
  HealthHistory.prototype.vaccines = function (vaccinesType) {
    this.HealthHistory.vaccines.push(vaccinesType);
  };
  
  HealthHistory.prototype.checkup = function (checkupDate) {
    this.HealthHistory.checkup.push(checkupDate);
  };
  
  function CatCreator(name, age, color, castrated) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.castrated = castrated;
    this.HealthHistory = HealthHistory;
  }
  
  CatCreator.prototype.meow = () => console.log("miau miau");
  
  let mochi = new CatCreator("Filózinha", 1, "laranja", true);
  
  mochi.meow();
  mochi.HealthHistory.vaccines = [
    "gripe",
    "v3",
    "v4",
    "v5",
    "anti-rabies",
    "Giardia",
  ];
  mochi.HealthHistory.procedure = [
    { type: "Physiotherapy", reason: "luxation legs" },
    { type: "x-ray", reason: "patella luxation" },
    { type: "blood exams", reason: "kidney disfunction" },
  ];
  mochi.HealthHistory.checkup = [
    "12/01/2020",
    "12/25/2016",
    "12/26/2019",
    "12/26/2022",
    "12/26/2021",
  ];
  
  console.log(mochi);