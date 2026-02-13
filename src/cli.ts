import inquirer from "inquirer";
import { countryMenu } from "./services/destinationCLI.js";
import { activityMenu } from "./services/activityCLI.js";

/**
 * Main menu show trips, activity, budget, options.
 * Start the program
 */
export const mainMenu = async (): Promise<void> => {
	try {
		// Handle users options
		const answers = await inquirer.prompt<{ action: string }>([
			{
				type: "select",
				name: "action",
				message: "What would you like to do?",
				choices: [
					"View Trips",
					"Add Activity",
					"View Budget",
					"Insert max budget",
					"Exit",
				],
			},
		]);
		// Exit the program
		if (answers.action === "Exit") {
			console.log("Bye!");
		}
		if (answers.action === "View Trips") {
			countryMenu();
		} // end of View Trips
		if (answers.action === "Add Activity") {
			activityMenu();
		} // end of Add Activity
		if (answers.action === "View Budget") {
			console.log("View Budget");
		} // end of View Budget
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
