import styled from 'styled-components';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export default function HeadLine1({children}: Props) {
  return (
    <HeadLine1Container>
      {children}
    </HeadLine1Container>
  );
}

const HeadLine1Container = styled.h1`;
    color: #222;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal
`;