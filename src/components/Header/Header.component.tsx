import { FunctionComponent } from 'react';
import type { HeaderProps } from './Header.interface';
import {
  ContactButton,
  HeaderBox,
  HeaderBoxContent,
  HeaderLogoBox,
} from './Header.styles';
import secondLogo from '../../../public/images/logo-4.png';
import firstLogo from '../../../public/images/react-icon.svg';
import Image from 'next/image';
import { Container } from '@/components';

export const Header: FunctionComponent<HeaderProps> = ({ logoSrc }) => {
  return (
    <HeaderBox>
      <Container>
        <HeaderBoxContent>
          <HeaderLogoBox>
            <Image src={firstLogo} alt="iconLogo" className="iconLogo" />
            <Image src={secondLogo} alt="textLogo" className="textLogo" />
          </HeaderLogoBox>
          <ContactButton href="#contactSection">Contato</ContactButton>
        </HeaderBoxContent>
      </Container>
    </HeaderBox>
  );
};
