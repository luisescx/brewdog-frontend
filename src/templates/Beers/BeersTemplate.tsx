import Heading from "components/Heading";
import BeerCard from "components/BeerCard";
import * as S from "./styles";

type BeersTemplateProps = {
  beers: Beer[];
};

const BeersTemplate = ({ beers }: BeersTemplateProps) => {
  return (
    <S.Wrapper>
      <Heading size="huge" lineLeft>
        Beers
      </Heading>

      <S.Content>
        {beers.map((beer) => (
          <BeerCard key={beer.id} {...beer} />
        ))}
      </S.Content>
    </S.Wrapper>
  );
};

export default BeersTemplate;
