import styled from 'styled-components';
import {HeadLine1, SignUpForm} from '@/component';
import {signUp} from '@/api/auth';
import {FormEvent} from 'react';

interface SignUpRequestBody {
    name: string;
    email: string;
    password: string;
    nickname: string;
    phoneNumber: string;
    isMarketingAgree: boolean;
}

export default function SignUpPage() {
  return (
    <Container>
      <HeadLine1>회원가입</HeadLine1>
      <SignUpForm/>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 14px;
    margin: 0 auto;
    min-width: 350px;
`;