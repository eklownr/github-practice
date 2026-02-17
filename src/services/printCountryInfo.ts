import { color } from "./formatUtils.js";
import { type Country } from "./destinationService.js";

// Print country information with colors
export const printCountryInfo = (countryInfo: Country) => {
	console.log(color("magenta", "*".repeat(30)));

	console.log(color("yellow", `Destination: ${countryInfo.name.common}`));
	console.log(color("yellow", `Capital: ${countryInfo.capital}`));
	console.log(
		color("yellow", `Population: ${countryInfo.population / 1000000} M`),
	);
	const currencyKey = Object.keys(countryInfo.currencies)[0];
	if (currencyKey) {
		const currency = countryInfo.currencies[currencyKey];
		if (currency) {
			console.log(
				color(
					"yellow",
					`Currency: ${currency.name} (${currency.symbol})`,
				),
			);
		}
	}
	console.log(color("yellow", `Flag: ${countryInfo.flag}`));
	//console.log(color("green", `Currency: ${countryInfo.currencies[0].name}`));

	console.log(color("magenta", "*".repeat(30)));
};
