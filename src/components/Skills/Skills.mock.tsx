import { JavascriptFill } from 'akar-icons';
import { SkillsProps } from './Skills.interface';
import {
  SiStorybook,
  SiHtml5,
  SiCss3,
  SiReact,
  SiPhp,
  SiAdobephotoshop,
  SiTypescript,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { BsFillBootstrapFill, BsGit, BsWordpress } from 'react-icons/bs';
import { BiLogoFigma } from 'react-icons/bi';
import { GrMysql } from 'react-icons/gr';

export const skillsProps: SkillsProps = {
  subtitle: 'Um desafio é uma chance para você fazer o seu melhor.',
  title: 'Habilidades & experiencias',
  description:
    'A principal área de especialização é o desenvolvimento front-end(lado do cliente da web). HTML, CSS, JS, construção de aplicações web de pequeno e médio porte com React, animações e codificação de layouts interativos. Também tenho experiência com um dos CMS de código aberto mais populares da web - WordPress.',
  skills: [
    {
      title: 'JavaScript',
      icon: <JavascriptFill />,
    },
    {
      title: 'Storybook',
      icon: <SiStorybook />,
    },
    {
      title: 'HTML',
      icon: <SiHtml5 />,
    },
    {
      title: 'CSS',
      icon: <SiCss3 />,
    },
    {
      title: 'React',
      icon: <SiReact />,
    },
    {
      title: 'SASS',
      icon: <FaSass />,
    },
    {
      title: 'Bootstrap',
      icon: <BsFillBootstrapFill />,
    },
    {
      title: 'GIT',
      icon: <BsGit />,
    },
    {
      title: 'Figma',
      icon: <BiLogoFigma />,
    },
    {
      title: 'WordPress',
      icon: <BsWordpress />,
    },
    {
      title: 'PHP',
      icon: <SiPhp />,
    },
    {
      title: 'MySQL',
      icon: <GrMysql />,
    },
    {
      title: 'Photoshop',
      icon: <SiAdobephotoshop />,
    },
    {
      title: 'TypeScript',
      icon: <SiTypescript />,
    },
  ],
};
