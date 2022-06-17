import Heading from "components/Heading";
import BeerCard from "components/BeerCard";
import * as S from "./styles";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

type BeersTemplateProps = {
  beers: Beer[];
};

const BeersTemplate = ({ beers }: BeersTemplateProps) => {
  const { push } = useRouter();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Heading size="huge" lineLeft>
          Beers
        </Heading>

        <S.Link
          role="button"
          onClick={async () => {
            const data = await signOut({
              redirect: false,
              callbackUrl: "/sign-in"
            });

            push(data.url);
          }}
        >
          <span>Sign out</span>
        </S.Link>
      </S.HeaderWrapper>

      <S.Content>
        {beers.map((beer) => (
          <BeerCard key={beer.id} {...beer} />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default BeersTemplate;
