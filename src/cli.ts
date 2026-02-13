import inquirer from "inquirer";
import { getDestinationtInfo } from "./services/destinationService.js";
import { getContinent } from "./services/destinationService.js";
import { countryMenu } from "./services/destinationCLI.js";

// Main menu show trips, activity, budget, options.
export const mainMenu = async (): Promise<void> => {
	try {
		// Handle users options
		const answers = await inquirer.prompt<{ action: string }>([
			{
				type: "select",
				name: "action",
				message: "What would you like to do?",
				choices: ["View Trips", "Add Activity", "View Budget", "Exit"],
			},
		]);
		// Handle users options
		if (answers.action === "Exit") {
			console.log("Bye!");
		}
		if (answers.action === "View Trips") {
			countryMenu();
		} // end of View Trips
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
