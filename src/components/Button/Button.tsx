import { ButtonStyled } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button = ({ children, handleClick }: ButtonProps) => {
  return (
    <ButtonStyled color={children as string} onClick={handleClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
