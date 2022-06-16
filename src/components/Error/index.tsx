import * as S from "./styles";

export default function Error() {
  return (
    <S.Wrapper>
      <S.Title>404: Not found</S.Title>
      <S.Description>Ops...this page does not exist.</S.Description>
    </S.Wrapper>
  );
}
