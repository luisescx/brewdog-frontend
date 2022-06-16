import { useState, InputHTMLAttributes } from "react";

import * as S from "./styles";

export type TextFieldProps = {
  onInputChange?: (value: string) => void;
  icon?: React.ReactNode;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField = ({
  icon,
  name,
  error,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  return (
    <S.Wrapper error={!!error}>
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
};

export default TextField;
