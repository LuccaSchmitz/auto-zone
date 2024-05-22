const BASE_URL = "https://vpic.nhtsa.dot.gov/api/vehicles";

interface Make {
  Make_ID: number;
  Make_Name: string;
}

interface Model extends Make {
  Model_ID: number;
  Model_Name: string;
}

interface MakeResponse {
  Results: Make[];
}

interface ModelResponse {
  Results: Model[];
}

export async function loadMakes() {
  const url = new URL(`${BASE_URL}/GetAllMakes?format=json`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const makes = (await response.json()) as MakeResponse;

  return makes.Results;
}

export async function loadModels(make: string) {
  const url = new URL(`${BASE_URL}/GetModelsForMakeId/${make}?format=json`);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const models = (await response.json()) as ModelResponse;

  return models.Results;
}
