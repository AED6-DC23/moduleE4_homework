class ElectricalAppliance
{
  constructor(name, power)
  {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  
  plugIn()
  {
    console.log(this.name + " включен(а)");
    this.isPlugged = true;
  }

  unplug()
  {
    console.log(this.name + "отключен(а)");
    this.isPlugged = false;
  }
  
  getPowerUsed()
  {
    return this.isPlugged ? this.power : 0;
  }
}

const lampa = new ElectricalAppliance('Настольная лампа', 45);
const computer = new ElectricalAppliance('Компьютер', 400);

console.log(lampa.getPowerUsed() + computer.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lampa.getPowerUsed() + computer.getPowerUsed());