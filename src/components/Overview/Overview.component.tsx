import { FunctionComponent } from 'react';
import { OverviewProps } from './Overview.interface';
import {
  Content,
  DescriptionOverview,
  LinkOverview,
  OverviewBox,
  PcOverview,
  TitleOverview,
} from './Overview.styles';
import Image from 'next/image';
import pcOverview from '../../../public/images/pc-overview-without-tag.svg';
import pcOverviewTag from '../../../public/images/pc-overview-tag.svg';

export const Overview: FunctionComponent<OverviewProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <OverviewBox data-anchor="overviewSection" className="hidden section">
      <Content>
        <TitleOverview className="hidden">{title}</TitleOverview>
        <DescriptionOverview className="hidden">
          {description}
        </DescriptionOverview>
        {link?.map((item) => (
          <LinkOverview
            href={item.linkRedirect}
            key={item.linkText}
            target="__blank"
            className="hidden"
          >
            {item.linkText}
          </LinkOverview>
        ))}
      </Content>
      <PcOverview>
        <Image src={pcOverview} alt="pcMain" />
        <Image src={pcOverviewTag} alt="pcMainTag" className="tag" />
      </PcOverview>
    </OverviewBox>
  );
};
