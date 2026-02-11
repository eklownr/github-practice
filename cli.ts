import inquirer from "inquirer";

const mainMenu = async () => {
	const answers = await inquirer.prompt([
		{
			type: "select",
			name: "acction",
			message: "What would you like to do?",
			choices: ["View Trips", "Add Activity", "View Budget", "Exit"],
		},
	]);
	if (answers) {
		console.log(answers);
	}
};

mainMenu();
