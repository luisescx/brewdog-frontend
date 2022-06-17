import { GetServerSidePropsContext } from "next";
import BeersTemplate from "templates/Beers/BeersTemplate";
import { getBeers } from "useCases/getBeers";
import protectedRoutes from "utils/protected-routes";

type BeersProps = {
  beers: Beer[];
};

export default function Beers({ beers }: BeersProps) {
  return <BeersTemplate beers={beers} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await protectedRoutes(context);

  const beers = await getBeers();

  return {
    props: {
      beers
    }
  };
}
