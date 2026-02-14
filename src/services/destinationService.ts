const contryAPI: string = "https://restcountries.com/v3.1/name/";

type Country = { [key: string]: string | number | string[] };

/**
 * Get information on a specific country
 * @param contryName - The name of the country
 * @returns - Country data
 */
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
