import Image from "next/image";
import * as S from "./styles";

const BeerCard = ({ name, description, imageUrl, firstBrewed }: Beer) => {
  return (
    <S.Wrapper>
      <S.ImageBox>
        <Image src={imageUrl} alt={name} layout="fill" objectFit="contain" />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{name}</S.Title>
          <S.BrewDate>{firstBrewed}</S.BrewDate>
          <S.Description>{description}</S.Description>
        </S.Info>
      </S.Content>
    </S.Wrapper>
  );
};

export default BeerCard;
