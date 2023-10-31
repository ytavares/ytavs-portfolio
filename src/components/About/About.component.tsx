import { FunctionComponent } from 'react';
import { AboutProps } from './About.interface';
import {
  AboutBox,
  AboutContent,
  AboutImage,
  AboutSecondContent,
  AboutSubtitle,
  AboutText,
  AboutTitle,
} from './About.stytes';
import aboutImage from '../../../public/images/mainPhoto.png';
import Image from 'next/image';

export const About: FunctionComponent<AboutProps> = ({
  title,
  subtitle,
  textMain,
  textSecond,
}) => {
  return (
    <AboutBox>
      <AboutImage>
        <Image src={aboutImage} alt="mainPhoto" />
      </AboutImage>
      <AboutContent>
        <AboutTitle>{title}</AboutTitle>
        <AboutSubtitle>{subtitle}</AboutSubtitle>
      </AboutContent>
      <AboutSecondContent>
        <AboutText>{textMain}</AboutText>
        <AboutText className="second">{textSecond}</AboutText>
      </AboutSecondContent>
    </AboutBox>
  );
};
