import { FunctionComponent } from 'react';
import type { HeaderProps } from './Header.interface';
import { ContactButton, HeaderBox, HeaderLogoBox } from './Header.styles';
import secondLogo from '../../../public/images/logo-4.png';
import firstLogo from '../../../public/images/react-icon.svg';
import Image from 'next/image';

export const Header: FunctionComponent<HeaderProps> = ({ logoSrc }) => {
  return (
    <HeaderBox>
      <HeaderLogoBox href="#">
        <Image src={firstLogo} alt="iconLogo" className="iconLogo" />
        <Image src={secondLogo} alt="textLogo" className="textLogo" />
      </HeaderLogoBox>
      <ContactButton href="#contactSection">Contato</ContactButton>
    </HeaderBox>
  );
};
