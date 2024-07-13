import { ButtonStyled } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button = ({ name, handleClick }: ButtonProps) => {
  return (
    <ButtonStyled name={name} onClick={handleClick}>
      {name}
    </ButtonStyled>
  );
};

export default Button;
