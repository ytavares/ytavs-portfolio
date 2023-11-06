import { ContactProps } from '.';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';

export const contactProps: ContactProps = {
  title: 'Contate-me!',
  socials: [
    {
      title: 'Linkedin',
      icon: <AiOutlineLinkedin />,
      link: 'https://www.linkedin.com/in/ytavares/',
    },
    {
      title: 'WhatsApp',
      icon: <BsWhatsapp />,
      link: 'https://wa.me/21980832586',
    },
    {
      title: 'Instagram',
      icon: <BsInstagram />,
      link: 'https://www.instagram.com/yu_tav/',
    },
    {
      title: 'Github',
      icon: <AiFillGithub />,
      link: 'https://github.com/ytavares',
    },
  ],
};
