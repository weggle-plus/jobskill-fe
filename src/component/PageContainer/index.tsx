import styled from 'styled-components';
import {ReactNode} from 'react';

interface Props {
    children: ReactNode;
}
export default function PageContainer({children}: Readonly<Props>) {
  return (
    <Main>
      {children}
    </Main>
  );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 40px;
`;