// Types for Activities
export type Activity = {
	name?: string; // optional
	activityCost: number;
	category: "food" | "transport" | "sightseeing" | "no activity";
	startTime: string;
};

// Types for Trips
export type Trip = {
	cost: number;
	destination: string;
	startDate: string;
	activities: Activity[];
};

// Cost for each country
export const enum Cost {
	"Greece" = 1400,
	"Pakistan" = 6000,
	"Norway" = 800,
}

// Cost for each activity
export const enum ActivityCost {
	"food" = 100,
	"transport" = 200,
	"sightseeing" = 300,
}
