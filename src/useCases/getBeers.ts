import { beerDtoListToBeerList } from "mappers/beerMapper";
import { apiBrewDog } from "services/apiBrewDog";

export const getBeers = async (page = 1): Promise<Beer[]> => {
  const response = await apiBrewDog.get<BeerDTO>(
    `beers?page=${page}&per_page=10`
  );

  if (
    response.data &&
    Array.isArray(response.data) &&
    response.data.length > 0
  ) {
    return beerDtoListToBeerList(response.data);
  }

  return [];
};
