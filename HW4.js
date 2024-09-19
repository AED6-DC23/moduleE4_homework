function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  } // метод, который определяет прибор как включенный в розетку 
  
  ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " включен(а)");
    this.isPlugged = true;
  }

  ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " отключена(а)");
    this.isPlugged = false;
  }
  
  ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
  }
  
  
  const lampa = new ElectricalAppliance('Настольная лампа', 45);
  const computer = new ElectricalAppliance('Компьютер', 400);
  
  console.log(lampa.getPowerUsed() + computer.getPowerUsed());
  
  lampa.unplug();
  console.log(lampa.getPowerUsed() + computer.getPowerUsed());
  
  computer.plugIn();
  console.log(lampa.getPowerUsed() + computer.getPowerUsed());

  

