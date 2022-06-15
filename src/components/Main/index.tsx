import * as S from "./styles";

const Main = () => (
  <S.Wrapper>
    <S.Title>Brewdog</S.Title>

    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
    />
  </S.Wrapper>
);

export default Main;
