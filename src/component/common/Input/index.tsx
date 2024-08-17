import {InputHTMLAttributes} from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export default function Input({placeholder, label}: Props) {
  return (
    <LabelContainer>
      {label}
      <InputContainer placeholder={placeholder}></InputContainer>
    </LabelContainer>
  );
}

const LabelContainer = styled.label`
    display: inline-flex;
    flex-direction: column;
    gap: 8px;

    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
`;

const InputContainer = styled.input`
    display: inline-flex;
    height: 38px;
    padding: 9px 16px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #DEE2E6;
    background: #FFF;
`;