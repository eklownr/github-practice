export type User = {
	name?: string; // Optional
	destination: string;
	activities?: string[]; // Optional
	budget: string;
	startDate: string;
};

// Test user1
export const user1: User = {
	destination: "Greece",
	activities: ["resturants visit", "cab ride", "boat sightseeing"],
	budget: "1400",
	startDate: "No date set",
};
