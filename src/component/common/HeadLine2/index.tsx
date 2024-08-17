import styled from 'styled-components';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export default function HeadLine2({children}: Props) {
  return (
    <HeadLine2Container>
      {children}
    </HeadLine2Container>
  );
}

const HeadLine2Container = styled.h2`;
  color: #222;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;