export const beerDtoListToBeerList = (data: BeerDTO[]): Beer[] => {
  return data.map(
    ({ description, first_brewed, id, image_url, name, tagline }) => ({
      id,
      description,
      name,
      firstBrewed: first_brewed,
      imageUrl: image_url,
      tagline
    })
  );
};
