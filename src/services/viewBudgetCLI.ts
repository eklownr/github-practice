import { mainMenu } from "../cli.js";
import { type Trip } from "../models.js";

export const viewBudgetMenu = async (user: Trip): Promise<number> => {
	try {
		console.log("View budget, Trip + activities:");
		user.activities.forEach((activity) => {
			console.log(`${activity.name} - ${activity.activityCost} kr`);
		});
		mainMenu();
		return 0;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Menu error:", error.message);
		} else {
			console.error("Unknown error:", String(error));
		}
		throw error;
	}
};
