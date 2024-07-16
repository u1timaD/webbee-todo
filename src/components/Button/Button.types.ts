import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  handleClick: () => void;
}
