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
 * Food		- ${ActivityCost.food} kr, 
 * Transport 	- ${ActivityCost.transport} kr, 
 * Sightseeing 	- ${ActivityCost.sightseeing} kr
 * No activity 	- 0 kr
 * ******************************`,

				choices: [`food`, `transport`, `sightseeing`, `no activity`],
			},
		]);
		/**
		 * Add data to user TODO:(Save user to database: db.json)
		 */

		// Store activity to user object
		if (
			activity.selectActivity !== "no activity" &&
			activity.selectActivity !== undefined
		) {
			user.activities.push(activity.selectActivity);
		}

		// Print out selected activity in green
		console.log(
			color("green", `Your activity is ${activity.selectActivity}`),
		);
		// User data so far
		console.log(color("red", "User data so far: "), user);

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
