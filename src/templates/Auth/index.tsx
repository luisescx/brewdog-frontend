import Image from "next/image";

import Heading from "components/Heading";
import * as S from "./styles";

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.jpg"
        alt="Won Games Auth Page"
        layout="fill"
        objectFit="cover"
      />

      <S.BannerContent>
        <Heading size="huge">All your favorite beers in one place</Heading>

        <S.Subtitle>
          <strong>BrewDog</strong> is the best brewery.
        </S.Subtitle>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <S.ImageWrapper>
          <Image
            src="/img/logo.png"
            alt="Won Games Auth Page"
            width={128}
            height={128}
          />
        </S.ImageWrapper>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
