import inquirer from "inquirer";
import { countryMenu } from "./services/destinationCLI.js";
import { activityMenu } from "./services/activityCLI.js";
import { type Trip } from "./models.js";
import { viewBudgetMenu } from "./services/viewBudgetCLI.js";
import { maxBudgetMenu } from "./services/maxBudgetCLI.js";

// Globals
let activityCounter = 0; // track the number of activities

/**
 * User object to store data
 * type Trip from ./models
 */
export const user: Trip = {
	cost: 0,
	destination: "No destination set",
	startDate: "No date set",
	activities: [
		{
			name: "No activity set",
			activityCost: 0,
			category: "no activity",
			startTime: "No date set",
		},
	],
};

// Function to add one more new activity
const addNewActivity = (user: Trip): void => {
	user.activities?.push({
		name: "No activity set",
		activityCost: 0,
		category: "no activity",
		startTime: "No date set",
	});
};

/**
 * Main menu show trips, activity, budget, options.
 *** Start of the program ***
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
		} else if (answers.action === "View Trips") {
			countryMenu(user); // add user as an argument
		} // end of View Trips
		else if (answers.action === "Add Activity") {
			activityMenu(user, activityCounter);
			activityCounter++;
			addNewActivity(user);
		} // end of Add Activity
		else if (answers.action === "View Budget") {
			viewBudgetMenu(user);
		} // end of View Budget
		else if (answers.action === "Insert max budget") {
			maxBudgetMenu();
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
