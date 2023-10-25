import { FunctionComponent } from 'react';
import { ContainerBox } from './Container.styles';
import { ContainerProps } from './Container.interface';

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <ContainerBox>{children}</ContainerBox>;
};
