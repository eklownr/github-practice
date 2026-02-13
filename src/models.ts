// Types for Activities and Trips
export type Activity = {
	id?: string;
	name: string;
	cost: number;
	category: "food" | "transport" | "sightseeing";
	startTime: string;
};

export type Trip = {
	id?: string;
	cost: number;
	destination: string;
	startDate: string;
	activities?: Activity[]; // optional
};

/**
 * Activities, three different objects
 */
export const activity1: Activity = {
	id: "1",
	name: "Resturants visit",
	cost: 400,
	category: "food",
	startTime: "No date set",
};

export const activity2: Activity = {
	id: "2",
	name: "Cab ride",
	cost: 200,
	category: "transport",
	startTime: "No date set",
};

export const activity3: Activity = {
	id: "3",
	name: "Boat sightseeing",
	cost: 800,
	category: "sightseeing",
	startTime: "No date set",
};

/**
 * Trips to three different countries
 * If user chose Greece. All data from this obj will be used
 */
export const Greece: Trip = {
	id: "1",
	cost: 1400,
	destination: "Greece",
	startDate: "No date set",
	activities: [],
};

export const Pakistan: Trip = {
	id: "2",
	cost: 6000,
	destination: "Pakistan",
	startDate: "No date set",
	activities: [],
};

export const Norway: Trip = {
	id: "3",
	cost: 900,
	destination: "Norway",
	startDate: "No date set",
	activities: [],
};
