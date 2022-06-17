import Image from "next/image";
import { useMemo } from "react";
import * as S from "./styles";

const BeerCard = ({ name, description, imageUrl, firstBrewed }: Beer) => {
  const image = useMemo(() => {
    return imageUrl ? imageUrl : "/img/logo.png";
  }, [imageUrl]);

  return (
    <S.Wrapper>
      <S.ImageContainer>
        <S.ImageBox>
          <Image src={image} alt={name} layout="fill" objectFit="contain" />
        </S.ImageBox>
      </S.ImageContainer>

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
