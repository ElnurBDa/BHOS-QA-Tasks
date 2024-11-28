import { Country, Manufacturer, TaxCalculator } from "./taxcalculator";

let calculator = new TaxCalculator();

let country = Country.USA;
let manufacturer = Manufacturer.MercedesBenz;
let engineVolume = 2.5;
let manufactureYear = 2015;

let tax = calculator.calculate(country, manufacturer, engineVolume, manufactureYear);

console.log(tax);

