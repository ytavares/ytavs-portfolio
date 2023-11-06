import { FunctionComponent } from 'react';
import { SkillsProps } from './Skills.interface';
import {
  IconItem,
  IconItemSVG,
  IconItemTitle,
  SkillsBox,
  SkillsDescription,
  SkillsIcons,
  SkillsSubtitle,
  SkillsTitle,
} from './Skills.styles';

export const Skills: FunctionComponent<SkillsProps> = ({
  title,
  description,
  subtitle,
  skills,
}) => {
  return (
    <SkillsBox className="hidden">
      <SkillsSubtitle>{subtitle}</SkillsSubtitle>
      <SkillsTitle>{title}</SkillsTitle>
      <SkillsDescription>{description}</SkillsDescription>
      <SkillsIcons>
        {skills?.map((skillItem) => (
          <IconItem key={skillItem.title}>
            <IconItemSVG>{skillItem.icon}</IconItemSVG>
            <IconItemTitle>{skillItem.title}</IconItemTitle>
          </IconItem>
        ))}
      </SkillsIcons>
    </SkillsBox>
  );
};
