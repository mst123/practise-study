interface Radio{
  switchRadio(trigger: boolean) : void
}
interface Battery{
  CheckBatteryStatus() : void
}
interface RadioAndBattery extends Radio {
  CheckBatteryStatus() : void
}
class Car implements Radio {
  switchRadio(trigger: boolean) {
  }
  another() {
    
  }
}

class CellPhone1 implements Radio, Battery {
  switchRadio(trigger: boolean) {
  }
  CheckBatteryStatus() {
  }
}

class CellPhone2 implements RadioAndBattery {
  switchRadio(trigger: boolean) {
  }
  CheckBatteryStatus() {
  }
}