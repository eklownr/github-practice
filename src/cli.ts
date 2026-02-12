import inquirer from "inquirer";
import { getDestinationtInfo } from "./services/destinationService.js";
import { getContinent } from "./services/destinationService.js";

// Main menu show trips, activity, budget, options.
const mainMenu = async (): Promise<void> => {
	try {
		const answers = await inquirer.prompt<{ action: string }>([
			{
				type: "select",
				name: "action",
				message: "What would you like to do?",
				choices: ["View Trips", "Add Activity", "View Budget", "Exit"],
			},
		]);
		// Handle users options
		if (answers.action === "View Trips") {
			const continent = await inquirer.prompt<{ region: string }>([
				{
					type: "select",
					name: "region",
					message: "Select a continent:",
					choices: [
						"Africa",
						"Americas",
						"Asia",
						"Europe",
						"Oceania",
					],
				},
			]);

			const allCountries = await getContinent(continent.region);
			const countrys = await inquirer.prompt<{ country: string }>([
				{
					type: "select",
					name: "region",
					message: "Select a country:",
					choices: allCountries,
				},
			]);

			const countryInfo = await getDestinationtInfo(countrys.country);
			console.log(countryInfo[0].name.common);
		}
		//console.log(answers.action);
	} catch (error) {
		// Handle errors
		if (error instanceof Error) {
			console.error("Menu error:", error.message);
		} else {
			console.error("Unknown error:", String(error));
		}
	}
};

mainMenu();
