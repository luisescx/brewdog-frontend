import { beerDtoListToBeerList } from "mappers/beerMapper";
import { apiBrewDog } from "services/apiBrewDog";

export const getBeers = async (): Promise<Beer[]> => {
  const response = await apiBrewDog.get<BeerDTO>("beers?page=1&per_page=25");

  if (response.data && Array.isArray(response.data)) {
    return beerDtoListToBeerList(response.data);
  }

  return [];
};
