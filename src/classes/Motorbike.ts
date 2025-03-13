// Importing Vehicle and Wheel classes
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    super(vin, make, model, year, weight);

    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  wheelie(): void {
    console.log(`${this.make} ${this.model} is doing a wheelie`);
  }

  override printDetails(): void {
    console.log(`
      VIN: ${this.vin}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight} kg
      Top Speed: ${this.topSpeed} km/h
      Color: ${this.color}
      Wheels: ${this.wheels.length} wheels
      `);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
