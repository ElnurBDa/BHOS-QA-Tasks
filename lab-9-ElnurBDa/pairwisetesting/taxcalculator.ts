export enum Country {
    USA,
    CANADA,
    LATIN,
    EU,
    ASIA,
    AFRICA,
    AUSTRALIA
}

export enum Manufacturer {
    MercedesBenz,
    BMW,
    Ford,
    Toyota,
    Other
}

export class TaxCalculator {
    calculate(
        country: Country,
        manufacturer: Manufacturer,
        engineVolume: number,
        manufactureYear: number
    ): number {
        if (engineVolume < 0.5 || engineVolume > 10) {
            throw new Error("Engine volume must be between 0.5 and 10.");
        }
        if (manufactureYear < 1900 || manufactureYear > 2022) {
            throw new Error("Manufacture year must be between 1900 and 2022.");
        }

        let baseTax = 5; // Base tax percentage
        let countryTax = 0;
        let manufacturerTax = 0;
        let engineVolumeTax = 0;
        let ageTax = 0;

        // Country-based tax adjustment
        switch (country) {
            case Country.USA:
                countryTax = 5;
                break;
            case Country.CANADA:
                countryTax = 4;
                break;
            case Country.LATIN:
                countryTax = 3;
                break;
            case Country.EU:
                countryTax = 6;
                break;
            case Country.ASIA:
                countryTax = 2;
                break;
            case Country.AFRICA:
                countryTax = 1;
                break;
            case Country.AUSTRALIA:
                countryTax = 4;
                break;
        }

        // Manufacturer-based tax adjustment
        switch (manufacturer) {
            case Manufacturer.MercedesBenz:
                manufacturerTax = 8;
                break;
            case Manufacturer.BMW:
                manufacturerTax = 7;
                break;
            case Manufacturer.Ford:
                manufacturerTax = 5;
                break;
            case Manufacturer.Toyota:
                manufacturerTax = 4;
                break;
            case Manufacturer.Other:
                manufacturerTax = 3;
                break;
        }

        // Engine volume-based tax adjustment
        engineVolumeTax = engineVolume * 2; // Example logic: 2% per liter

        // Age-based tax adjustment
        const currentYear = new Date().getFullYear();
        const vehicleAge = currentYear - manufactureYear;
        ageTax = vehicleAge * 0.1; // Example logic: 0.1% per year

        // Calculate total tax
        let totalTax = baseTax + countryTax + manufacturerTax + engineVolumeTax + ageTax;

        // Ensure tax is within the range of 5-50%
        if (totalTax < 5) totalTax = 5;
        if (totalTax > 50) totalTax = 50;

        return totalTax;
    }
}