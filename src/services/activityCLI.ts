import inquirer from "inquirer";
import { mainMenu } from "../cli.js";
import { activity1, activity2, activity3 } from "../models.js";
import { color } from "./formatUtils.js";

export const activityMenu = async (): Promise<void> => {
	try {
		// Handle users options
		const activity = await inquirer.prompt<{ selectActivity: string }>([
			{
				type: "select",
				name: "selectActivity",
				message: `Select an activity:
 ******************************
 * ${activity1.name} - ${activity1.cost} kr, 
 * ${activity2.name} - ${activity2.cost} kr, 
 * ${activity3.name} - ${activity3.cost} kr
 * ******************************`,

				choices: [
					`${activity1.name}`,
					`${activity2.name}`,
					`${activity3.name}`,
				],
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
