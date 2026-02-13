import inquirer from "inquirer";
import { getDestinationtInfo } from "./destinationService.js";
import { Greece, Pakistan, Norway } from "../models.js";

// Country menu, show destinations an d price.
export const countryMenu = async (): Promise<void> => {
	try {
		// Handle users options
		const countrys = await inquirer.prompt<{ selectCountry: string }>([
			{
				type: "select",
				name: "selectCountry",
				message: `Select a country: <Country> - <Ticket price>
 ******************************
 * Greece   - ${Greece.cost} kr, 
 * Pakistan - ${Pakistan.cost} kr, 
 * Norway   -  ${Norway.cost} kr
 * ******************************`,

				choices: ["Greece ", "Pakistan", "Norway"],
			},
		]);

		// Selected country
		const countryInfo = await getDestinationtInfo(countrys.selectCountry);

		if (countryInfo !== undefined) {
			console.log(
				`The capital of ${countryInfo[0].name.common} is ${countryInfo[0].capital[0]} and the flag looks like this ${countryInfo[0].flag}`,
			);
		} else {
			console.log("Country information not found");
		}
		// Handle errors
	} catch (error) {
		if (error instanceof Error) {
			console.error("Menu error:", error.message);
		} else {
			console.error("Unknown error:", String(error));
		}
	}
};

countryMenu();
