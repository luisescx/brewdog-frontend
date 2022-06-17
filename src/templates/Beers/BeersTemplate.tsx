import Heading from "components/Heading";
import BeerCard from "components/BeerCard";
import * as S from "./styles";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { getBeers } from "useCases/getBeers";
import { FormLoading } from "components/Form";

type BeersTemplateProps = {
  beers: Beer[];
};

type PaginateEventProps = {
  selected: number;
};

const TOTAL_PAGES = 33;

const BeersTemplate = ({ beers }: BeersTemplateProps) => {
  const [beersList, setBeers] = useState<Beer[]>(beers);
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const handlePageChange = useCallback(async (event: PaginateEventProps) => {
    const selectedPage = event.selected + 1;

    const beers = await getBeers(selectedPage);

    setBeers(beers);
  }, []);

  const handleSignOut = useCallback(async () => {
    setLoading(true);

    const data = await signOut({
      redirect: false,
      callbackUrl: "/sign-in"
    });

    push(data.url);
  }, [push]);

  return (
    <>
      <S.Wrapper>
        <S.HeaderWrapper>
          <Heading size="huge" lineLeft>
            Beers
          </Heading>

          {loading ? (
            <FormLoading />
          ) : (
            <S.Link role="button" onClick={handleSignOut}>
              <span>Sign out</span>
            </S.Link>
          )}
        </S.HeaderWrapper>

        <S.Content>
          {beersList.map((beer) => (
            <BeerCard key={beer.id} {...beer} />
          ))}
        </S.Content>

        <S.Footer>
          <S.MyPaginate
            pageCount={TOTAL_PAGES}
            onPageChange={handlePageChange}
            previousLabel="<"
            nextLabel=">"
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
          />
        </S.Footer>
      </S.Wrapper>
    </>
  );
};

export default BeersTemplate;
