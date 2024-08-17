import styled from 'styled-components';
import {ReactNode} from 'react';

type TextAlign = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'match-parent' | 'justify-all';
interface Props {
    children: ReactNode;
    textAlign?: TextAlign
}

export default function Display({children, textAlign}: Props) {
  return (
    <DisplayContainer $textAlign={textAlign}>{children}</DisplayContainer>
  );
}

const DisplayContainer = styled.h1<{$textAlign?: TextAlign}>`
    text-align: ${({$textAlign}) => $textAlign || 'center'};
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
