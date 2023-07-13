function HealthHistory() {
    this.procedure = [];
    this.checkup = [];
  }
  
  HealthHistory.prototype.procedure = function (procedureType) {
    this.HealthHistory.procedure.push(procedureType);
  };
  
  HealthHistory.prototype.vaccines = function (vaccinesType) {
    this.HealthHistory.vaccines.push(vaccinesType);
  };
  
  HealthHistory.prototype.checkup = () =>
    arrayOfDates.sort((dateA, dateB) => new Date(dateB) - new Date(dateA));
  
  function MouseCreator(name, age, color, species) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.species = species;
    this.HealthHistory = HealthHistory;
  }
  
  MouseCreator.prototype.exoticMethod = {
    get isAdult() {
      if (this.age >= 2) {
        return true;
      } else {
        return false;
      }
    },
  };
  
  let klaus = new MouseCreator("Klaus", 4, "grey", "mouse");
  
  klaus.HealthHistory.procedure = [
    { type: "surgery", reason: "cataracts eyes" },
    { type: "blood exams", reason: "checkup" },
  ];
  
  klaus.HealthHistory.checkup = [
    "12/01/2020",
    "12/25/2016",
    "12/26/2019",
    "12/26/2022",
    "12/26/2021",
    "12/26/2000",
  ];
  
  console.log(klaus);