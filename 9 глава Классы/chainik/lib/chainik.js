"use strict";
class Kettle {
    constructor(volume, power) {
        this.volume = volume;
        this.targetTemperature = 100;
        this.timerId = null;
        this.currentTemperature = 10;
        this.currentWater = 0;
        this.dirtyness = 0;
        this.isBroken = false;
    }
    startHeating() {
        if (!this.isBroken) {
            console.log(`Starting to heat water to ${this.targetTemperature}°C. from ${this.currentTemperature}`);
            if (this.timerId) {
                clearInterval(this.timerId);
            }
            this.timerId = setInterval(() => this.heat(), 1000);
        }
        else {
            console.log("You need to repair the kettle");
        }
    }
    heat() {
        if (this.currentTemperature >= this.targetTemperature) {
            this.stopHeating();
        }
        if (this.dirtyness >= 10) {
            if (this.timerId)
                clearInterval(this.timerId);
            this.isBroken = true;
            console.log("Your kettle is broken");
        }
        else {
            this.dirtyness += 1;
            this.currentTemperature += 10;
            console.log("Water is heater for 10°C");
        }
    }
    cooling() {
        console.log("Your water's starting to get cold");
        this.timerId = setInterval(() => {
            if (this.currentTemperature <= 20 && this.timerId) {
                clearInterval(this.timerId);
            }
            else {
                this.currentTemperature -= 10;
                console.log("the water has cooled by 10°C");
            }
        }, 100);
    }
    stopHeating() {
        if (this.timerId) {
            clearInterval(this.timerId);
            console.log(`Stop to heat water, time to drink tea!`);
        }
        else {
            console.log("You can't stop heat water before start");
        }
    }
    fillWater(amount) {
        if (this.currentWater + amount <= this.volume) {
            this.currentWater += amount;
            console.log(`Water filled for ${amount}`);
        }
        else {
            console.log("You spilled water");
        }
    }
}
class Repairer {
    constructor(options) {
        this.options = options;
    }
    fix(item) {
        if (this.options.some((Product) => item instanceof Product) &&
            "dirtyness" in item) {
            item.dirtyness = 0;
            console.log("Your item fixed");
        }
        else {
            console.log("Your item can't be fixed");
        }
    }
}
let kettle = new Kettle(1000, 200);
kettle.startHeating();
kettle.startHeating();
let repair = new Repairer([Kettle]);
repair.fix(kettle);
