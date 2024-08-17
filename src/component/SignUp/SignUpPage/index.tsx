import styled from 'styled-components';
import {HeadLine1, SignUpForm} from '@/component';

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