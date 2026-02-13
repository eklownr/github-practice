const contryAPI: string = "https://restcountries.com/v3.1/name/";

type Country = { [key: string]: string | number | string[] | undefined };

// get info on a specific country
export async function getDestinationtInfo(
	contryName: string,
): Promise<Country> {
	try {
		const response = await fetch(contryAPI + contryName);
		const data: Country = await response.json();
		return data;
	} catch (error) {
		if (error instanceof Error) {
			console.error("Menu error:", error.message);
		} else {
			console.error("Unknown error:", String(error));
		}
		throw error;
	}
}

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
