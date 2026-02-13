import inquirer from "inquirer";
import { getDestinationtInfo } from "./destinationService.js";

// Main menu show trips, activity, budget, options.
export const countryMenu = async (): Promise<void> => {
	try {
		// Handle users options
		const countrys = await inquirer.prompt<{ selectCountry: string }>([
			{
				type: "select",
				name: "selectCountry",
				message: "Select a country:",
				choices: ["Greece", "Pakistan", "Norway"],
			},
		]);

		const countryInfo = await getDestinationtInfo(countrys.selectCountry);
		if (countryInfo !== undefined) {
			console.log(
				`The capital of ${countryInfo[0].name.common} is ${countryInfo[0].capital[0]} the flag of this country ${countryInfo[0].flag}`,
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
