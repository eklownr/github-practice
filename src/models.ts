export type Activity = {
	id: string;
	name: string;
	cost: number;
	category: "food" | "transport" | "sightseeing";
	startTime: Date;
};
export type Trip = {
	id: string;
	cost: number;
	destination: string;
	startDate: Date;
	activities?: Activity[]; // optional
};

export const activity1: Activity = {
	id: "1",
	name: "resturants visit",
	cost: 100,
	category: "food",
	startTime: new Date(),
};
export const activity2: Activity = {
	id: "2",
	name: "cab ride",
	cost: 200,
	category: "transport",
	startTime: new Date(),
};
export const activity3: Activity = {
	id: "3",
	name: "boat sightseeing",
	cost: 300,
	category: "sightseeing",
	startTime: new Date(),
};

export const Greece: Trip = {
	id: "1",
	cost: 1400,
	destination: "Greece",
	startDate: new Date(),
	activities: [],
};

export const Pakistan: Trip = {
	id: "2",
	cost: 6000,
	destination: "Pakistan",
	startDate: new Date(),
	activities: [],
};

export const Norway: Trip = {
	id: "3",
	cost: 900,
	destination: "Norway",
	startDate: new Date(),
	activities: [],
};
