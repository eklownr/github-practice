// Types for Activities
export type Activity = {
	id?: string; // optional
	name?: string; // optional
	cost: number;
	category: "food" | "transport" | "sightseeing";
	startTime: string;
};

// Types for Trips
export type Trip = {
	id?: string; // optional
	cost: number;
	destination: string;
	startDate: string;
	activities?: Activity[]; // optional
};

// Cost for each country
export const enum Cost {
	"Greece" = 1400,
	"Pakistan" = 6000,
	"Norway" = 8000,
}

// Cost for each activity
export const enum ActivityCost {
	"food" = 100,
	"transport" = 200,
	"sightseeing" = 300,
}
