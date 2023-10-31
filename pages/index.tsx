import { About, Contact, Header, Overview } from '@/components';
import { aboutProps } from '@/components/About/About.mock';
import { overviewProps } from '@/components/Overview/Overview.mock';
import { TemplateComponent } from '@/styles/global';

export default function Home() {
  return (
    <TemplateComponent>
      <Header />
      <Overview {...overviewProps} />
      <About {...aboutProps} />
      <Contact title="Contate-me!" />
    </TemplateComponent>
  );
}
