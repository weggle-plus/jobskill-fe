import styled from 'styled-components';
import {ButtonHTMLAttributes, HTMLAttributes, ReactNode} from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant: 'primary' | 'secondary';
}
export default function Button({type, children, variant, onClick}: Props) {
  return (
    <ButtonContainer type={type} $variant={variant} onClick={onClick}>{children}</ButtonContainer>
  );
}

export const ButtonContainer = styled.button<{$variant: 'primary' | 'secondary'}>`
    min-width: 89px;
    padding: 8px 12px;
    border-radius: 6px;
    color: ${({$variant}) => $variant === 'primary' ? '#fff' : '#596FF6'};
    background-color: ${({$variant}) => $variant === 'primary' ? '#596FF6' : '#fff'};
    border: ${({$variant}) => $variant === 'primary' ? 'none' : '1px solid #F0F0F0'};
    font-size: 14px;
    font-weight: 600;
`;
