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
import { TemplateComponent } from '@/styles/global';
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    <ReactFullpage
      credits={{ enabled: false }}
      scrollBar
      anchors={[
        '#overview',
        '#aboutSection',
        '#skillsSection',
        '#contactSection',
      ]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <TemplateComponent>
              <Container>
                <Header />
                <Overview {...overviewProps} />
                <About {...aboutProps} />
                <Skills {...skillsProps} />
                <Contact {...contactProps} />
              </Container>
            </TemplateComponent>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
