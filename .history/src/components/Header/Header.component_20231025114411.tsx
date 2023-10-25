import { FunctionComponent } from 'react';
import type { HeaderProps } from './Header.interface';
import { ContactButton, HeaderBox } from './Header.styled';

export const Header: FunctionComponent<HeaderProps> = ({ logoSrc }) => {
  return (
    <HeaderBox>
      <ContactButton>Contato</ContactButton>
    </HeaderBox>
  );
};
