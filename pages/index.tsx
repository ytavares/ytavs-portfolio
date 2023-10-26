import { Header } from '@/components';
import { Overview } from '@/components/Overview/Overview.component';
import { overviewProps } from '@/components/Overview/Overview.mock';

export default function Home() {
  return (
    <>
      <Header />
      <Overview {...overviewProps} />
    </>
  );
}
