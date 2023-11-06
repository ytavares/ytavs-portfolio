import { FunctionComponent } from 'react';
import { FooterProps } from './Footer.interface';
import { FooterBox, FooterText } from './Footer.styles';

export const Footer: FunctionComponent<FooterProps> = ({ text }) => {
  return (
    <FooterBox>
      <FooterText>{text}</FooterText>
    </FooterBox>
  );
};
