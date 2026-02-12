const contryAPI: string = "https://restcountries.com/v3.1/name/";
const allContryAPI: string =
	"https://restcountries.com/v3.1/all?fields=name,capital,population,region";

// get info om a specific country
export const getDestinationtInfo = async (contryName: string) => {
	try {
		const response = await fetch(contryAPI + contryName);
		const data = await response.json();
		console.log(
			`The capital of ${data[0].name.common} is ${data[0].capital[0]}`,
		);
		return data;
	} catch (error) {
		console.log(error);
	}
};

// All 400 countries and print out their names:w
export const getAllDestinationtInfo = async (): Promise<void> => {
	try {
		const response = await fetch(allContryAPI);
		const data = await response.json();
		const regions = data.map((region) => region.name.common);
		for (let i = 0; i < regions.length; i++) {
			console.log(regions[i]);
		}
	} catch (error) {
		console.log(error);
	}
};

// return all countries in this continent
export const getContinent = async (continent: string): Promise<void> => {
	try {
		const response = await fetch(
			"https://restcountries.com/v3.1/region/" + continent,
		);
		const data = await response.json();
		const countryNames = data.map((country) => country.name.common);
		return countryNames;
	} catch (error) {
		console.log(error);
	}
};
