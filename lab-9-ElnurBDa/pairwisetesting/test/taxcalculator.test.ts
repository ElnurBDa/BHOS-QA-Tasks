import { describe, it, expect } from 'bun:test';
import pairwise_outputs from '../output.json';
import { Country, Manufacturer, TaxCalculator } from "../taxcalculator";

const taxCalculator = new TaxCalculator();

describe('TaxCalculator Tests', () => {
    pairwise_outputs.forEach(testCase => {
        const { Country: countryStr, Manufacturer: manufacturerStr, EngineVolume, ManufactureYear } = testCase;
        const country = Country[countryStr as keyof typeof Country];
        const manufacturer = Manufacturer[manufacturerStr as keyof typeof Manufacturer];
        const engineVolume = parseFloat(EngineVolume);
        const manufactureYear = parseInt(ManufactureYear, 10);

        it(`should calculate tax for ${countryStr}, ${manufacturerStr}, ${EngineVolume}L, ${ManufactureYear}`, () => {
            const tax = taxCalculator.calculate(country, manufacturer, engineVolume, manufactureYear);
            expect(tax).toBeGreaterThanOrEqual(5);
            expect(tax).toBeLessThanOrEqual(50);
        });
    });

    // Additional tests
    it('should throw an error for invalid engine volume', () => {
        expect(() => taxCalculator.calculate(Country.USA, Manufacturer.Ford, 0.4, 2000)).toThrow("Engine volume must be between 0.5 and 10.");
        expect(() => taxCalculator.calculate(Country.USA, Manufacturer.Ford, 10.1, 2000)).toThrow("Engine volume must be between 0.5 and 10.");
    });

    it('should throw an error for invalid manufacture year', () => {
        expect(() => taxCalculator.calculate(Country.USA, Manufacturer.Ford, 2.0, 1899)).toThrow("Manufacture year must be between 1900 and 2022.");
        expect(() => taxCalculator.calculate(Country.USA, Manufacturer.Ford, 2.0, 2023)).toThrow("Manufacture year must be between 1900 and 2022.");
    });

    it('should calculate minimum tax', () => {
        const tax = taxCalculator.calculate(Country.AFRICA, Manufacturer.Other, 0.5, 2022);
        expect(tax).toBe(10.2);
    });

    it('should calculate maximum tax', () => {
        const tax = taxCalculator.calculate(Country.EU, Manufacturer.MercedesBenz, 10, 1900);
        expect(tax).toBe(50);
    });
});
