import styled from 'styled-components';
import {HTMLAttributes, ReactNode} from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: 'primary' | 'secondary';
}
export default function Button({children, type, onClick}: Props) {
  return (
    <ButtonContainer type={type} onClick={onClick}>{children}</ButtonContainer>
  );
}

export const ButtonContainer = styled.button<{type: 'primary' | 'secondary'}>`
    min-width: 89px;
    padding: 8px 12px;
    border-radius: 6px;
    color: ${({type}) => type === 'primary' ? '#fff' : '#596FF6'};
    background-color: ${({type}) => type === 'primary' ? '#596FF6' : '#fff'};
    border: ${({type}) => type === 'primary' ? 'none' : '1px solid #F0F0F0'};
    font-size: 14px;
    font-weight: 600;
`;
