// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(vin, color, make, model, year, weight, topSpeed);
    this.towingCapacity = towingCapacity;

    if (wheels.length !== 4) {
      this.wheels = new Array(4).fill(new Wheel());
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleDetails = `${vehicle.make} ${vehicle.model}`;

    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleDetails}`);
    } else {
      console.log(`${vehicleDetails} is too heavy to tow`);
    }
  }

  override printDetails(): void {
    console.log(`Towing capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length} wheels`);
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.getTireBrand}`);
    });
  }
}

// Export the Truck class as the default export
export default Truck;
