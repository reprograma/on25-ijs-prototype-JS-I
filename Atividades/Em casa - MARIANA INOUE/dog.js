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
  
  function DogCreator(name, age, color, castrated) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.castrated = castrated;
    this.HealthHistory = HealthHistory;
  }
  
  DogCreator.prototype.bark = () => console.log("au au");
  
  let filomena = new DogCreator("Filózinha", 1, "bege", true);
  
  filomena.bark();
  filomena.HealthHistory.vaccines = ["gripe", "v10", "anti-rabies", "Giardia"];
  filomena.HealthHistory.procedure = [
    { type: "Physiotherapy", reason: "luxation legs" },
    { type: "x-ray", reason: "patella luxation" },
    { type: "blood exams", reason: "kidney disfunction" },
  ];
  filomena.HealthHistory.checkup = [
    "12/01/2020",
    "12/25/2016",
    "12/26/2019",
    "12/26/2022",
    "12/26/2021",
    "12/26/2000",
  ];
  
  console.log(filomena);
  