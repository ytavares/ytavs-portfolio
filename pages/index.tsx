import {
  About,
  Contact,
  Container,
  Footer,
  Header,
  Overview,
  Skills,
} from '@/components';
import { aboutProps } from '@/components/About/About.mock';
import { contactProps } from '@/components/Contact/Contact.mock';
import { footerProps } from '@/components/Footer/Footer.mock';
import { overviewProps } from '@/components/Overview/Overview.mock';
import { skillsProps } from '@/components/Skills/Skills.mock';

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Overview {...overviewProps} />
        <About {...aboutProps} />
        <Skills {...skillsProps} />
        <Contact {...contactProps} />
      </Container>
      <Footer {...footerProps} />
    </>
  );
}
