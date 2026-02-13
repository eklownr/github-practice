/**
 * Function to add weeks to the current date
 * @param {number} weeks - The number of weeks to add.
 * @returns {string} - The date string in the format "YYYY-MM-DD".
 * use: addWeeks(1) to show one week from now
 */
export const addWeeks = (weeks: number): string => {
	const date = new Date();
	date.setTime(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000); // Add milliseconds for 'weeks'
	return date.toISOString().substring(0, 10); // slice 10 firs characters to get only the date 2026-02-13
};

// TEST Log one, two, and three weeks from now
console.log("One week from now:", addWeeks(1));
console.log("Two weeks from now:", addWeeks(2));
console.log("Three weeks from now:", addWeeks(3));
