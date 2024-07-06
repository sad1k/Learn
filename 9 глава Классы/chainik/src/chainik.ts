class Kettle {
  volume: number;
  targetTemperature: number;
  timerId: NodeJS.Timeout | null;
  currentTemperature: number;
  currentWater: number;
  dirtyness: number;
  isBroken: boolean;

  constructor(volume: number, power: number) {
    this.volume = volume;
    this.targetTemperature = 100;
    this.timerId = null;
    this.currentTemperature = 10;
    this.currentWater = 0;
    this.dirtyness = 0;
    this.isBroken = false;
  }

  startHeating() {
    return new Promise((res, rej) => {
      if (!this.isBroken) {
        console.log(
          `Starting to heat water to ${this.targetTemperature}°C. from ${this.currentTemperature}`
        );
        if (!this.timerId) {
          this.timerId = setInterval(() => this.heat(res, rej), 1000);
        }
      } else {
        console.log("You need to repair the kettle");
      }
    });
  }

  heat(res: (val: string) => void, rej: (val: string) => void) {
    if (this.dirtyness >= 10) {
      if (this.timerId) clearInterval(this.timerId);
      this.isBroken = true;
      console.log("Your kettle is broken");
    } else {
      this.dirtyness += 1;
      this.currentTemperature += 10;
      console.log("Water is heater for 10°C");
      if (this.currentTemperature >= this.targetTemperature) {
        this.stopHeating();
        res('stop heating')
      }
    }
  }

  cooling() {
    console.log("Your water's starting to get cold");
    this.timerId = setInterval(() => {
      if (this.currentTemperature <= 20 && this.timerId) {
        clearInterval(this.timerId);
        this.timerId = null;
      } else {
        this.currentTemperature -= 10;
        console.log("the water has cooled by 10°C");
      }
    }, 100);
  }

  stopHeating() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log(`Stop to heat water, time to drink tea!`);
    } else {
      console.log("You can't stop heat water before start");
    }
  }

  fillWater(amount: number) {
    if (this.currentWater + amount <= this.volume) {
      this.currentWater += amount;
      console.log(`Water filled for ${amount}`);
    } else {
      console.log("You spilled water");
    }
  }
}

interface Dirtyable {
  dirtyness: number;
}

class Repairer<T extends Dirtyable> {
  options: Array<new (...args: any[]) => T>;

  constructor(options: Array<new (...args: any[]) => T>) {
    this.options = options;
  }

  async fix(item: T) {
    if (
      this.options.some((Product) => item instanceof Product) &&
      "dirtyness" in item
    ) {
      item.dirtyness = 0;
      console.log("Your item fixed");
    } else {
      console.log("Your item can't be fixed");
    }
  }
}

let kettle = new Kettle(1000, 200);


let repair = new Repairer([Kettle]);


kettle.startHeating().then((val) => {
  repair.fix(kettle);
});


