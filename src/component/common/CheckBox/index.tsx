import {InputHTMLAttributes} from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    labelBold?: boolean;
}

export default function CheckBox({label, name, labelBold, checked, onChange}: Props) {
  return (
    <StyledContainer>
      <StyledCheckBox type="checkbox" id={name} checked={checked} onChange={onChange}/>
      <StyledLabel htmlFor={name} $bold={labelBold}>{label}</StyledLabel>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px
`;

const StyledCheckBox = styled.input`
    border-color: #ABB5BE;
    &:checked {
        background: #596FF6;
        color: #FFFFFF;
        border: 0;
    }
`;

const StyledLabel = styled.label<{$bold?: boolean}>`
    color: #868686;
    font-size: 12px;
    font-style: normal;
    font-weight: ${({$bold}) => $bold ? '700' : '400'};
    line-height: 28px;
`;