const countryAPI: string = "https://restcountries.com/v3.1/name/";

// Country interface to match data from API
export interface Country {
	flag: string;
	region: string; // Continent
	population: number;
	currencies: {
		[key: string]: {
			name: string;
			symbol: string;
		};
	};
	capital: string;
	name: {
		// Country name
		common: string;
		official: string;
	};
}

/** *************************************
 * Get information on a specific country
 * @param countryName - The name of the country
 * @returns - Country data
 */
export const getDestinationtInfo = async (
	countryName: string,
): Promise<Country> => {
	try {
		const response = await fetch(countryAPI + countryName);
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
};
