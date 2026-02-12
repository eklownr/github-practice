const contryAPI: string = "https://restcountries.com/v3.1/name/";
const allContryAPI: string =
	"https://restcountries.com/v3.1/all?fields=name,capital,population,region";

type Country = { [key: string]: string | number | string[] };

// get info on a specific country
export async function getDestinationtInfo(
	contryName: string,
): Promise<Country> {
	try {
		const response = await fetch(contryAPI + contryName);
		const data: Country = await response.json();
		//		console.log(
		//			`The capital of ${data[0].name.common} is ${data[0].capital[0]}`,
		//		);
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

// All 400 countries and print out their names
export const getAllDestinationtInfo = async (): Promise<void> => {
	try {
		const response = await fetch(allContryAPI);
		const data: Country[] = await response.json();
		if (data !== undefined) {
			const regions = data.map((region) => region.name.common);
		}
		for (let i = 0; i < regions.length; i++) {
			console.log(regions[i]);
		}
	} catch (error) {
		console.log(error);
	}
};

type CountryName = { name: { common: string[] } };

// return all countries in this continent
export const getContinent = async (continent: string): Promise<string[]> => {
	try {
		const response = await fetch(
			"https://restcountries.com/v3.1/region/" + continent,
		);
		const data = await response.json();
		const countryNames: string[] = data.map(
			(country: CountryName) => country.name.common,
		);
		return countryNames;
	} catch (error) {
		console.log(error);
		throw error;
	}
};
