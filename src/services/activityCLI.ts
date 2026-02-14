import inquirer from "inquirer";
import { mainMenu } from "../cli.js";
import { color } from "./formatUtils.js";
import { type Trip } from "../models.js";
import { ActivityCost } from "../models.js";

export const activityMenu = async (user: Trip): Promise<void> => {
	try {
		// Handle users options
		const activity = await inquirer.prompt<{ selectActivity: string }>([
			{
				type: "select",
				name: "selectActivity",
				message: `Select an activity:
 ******************************
 * Food			- ${ActivityCost.food} kr, 
 * Transport 	- ${ActivityCost.transport} kr, 
 * Sightseeing 	- ${ActivityCost.sightseeing} kr
 * ******************************`,

				choices: [`food`, `transport`, `sightseeing`],
			},
		]);
		/**
		 * TODO - Add data to user
		 */
		// Print out selected activity in green
		console.log(
			color("green", `Your activity is ${activity.selectActivity}`),
		);

		// Back to main-menu again
		mainMenu();
		// Handle errors
	} catch (error) {
		if (error instanceof Error) {
			console.error("Menu error:", error.message);
		} else {
			console.error("Unknown error:", String(error));
		}
	}
};
