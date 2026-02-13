import inquirer from "inquirer";
import { mainMenu } from "../cli.js";
import { addWeeks } from "./utils.js";

// Country menu, show destinations an d price.
export const dateMenu = async (): Promise<void> => {
	try {
		// Handle users options
		const travelDate = await inquirer.prompt<{ selectDate: string }>([
			{
				type: "select",
				name: "selectDate",
				message: `Select date you would like to travel:
 ******************************
 * In one week   - ${addWeeks(1)}, 
 * In two weeks - ${addWeeks(2)}, 
 * In three weeks  -  ${addWeeks(3)}
 * ******************************`,

				choices: [`${addWeeks(1)}`, `${addWeeks(2)}`, `${addWeeks(3)}`],
			},
		]);
		/**
		 * TODO - Add data to user
		 */
		console.log(`Your travel date: ${travelDate.selectDate}`);

		// run main menu again
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
