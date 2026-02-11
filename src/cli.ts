import inquirer from "inquirer";

// Main menu show trips, activity, budget, options.
const mainMenu = async (): Promise<void> => {
	let choice: string = "";

	// Loop menu
	while (choice !== "Exit") {
		try {
			const answers = await inquirer.prompt<{ action: string }>([
				{
					type: "select",
					name: "action",
					message: "What would you like to do?",
					choices: [
						"View Trips",
						"Add Activity",
						"View Budget",
						"Exit",
					],
				},
			]);
			// Set choice to stop loop
			choice = answers.action;

			// Handle users options
			console.log(answers.action);
		} catch (error) {
			// Hantera okända fel på ett typsäkert sätt
			if (error instanceof Error) {
				console.error("Menu error:", error.message);
			} else {
				console.error("Unknown error:", String(error));
			}
		}
	}
};

mainMenu();
