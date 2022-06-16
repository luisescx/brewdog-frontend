import * as S from "./styles";

export type LineColors = "primary" | "secondary";

export type HeadingProps = {
  children: React.ReactNode;
  color?: "white" | "black";
  lineLeft?: boolean;
  lineColor?: LineColors;
  size?: "small" | "medium" | "huge";
};

const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineColor = "primary",
  size = "medium"
}: HeadingProps) => (
  <S.Wrapper
    color={color}
    lineLeft={lineLeft}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </S.Wrapper>
);

export default Heading;
