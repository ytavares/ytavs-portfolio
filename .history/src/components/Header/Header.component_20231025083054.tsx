import { FunctionComponent } from 'react';
import type { HeaderProps } from './Header.interface';
import { Button } from './Header.styled';

export const Header: FunctionComponent<HeaderProps> = ({ logoSrc }) => {
  return <Button>Teste</Button>;
};
