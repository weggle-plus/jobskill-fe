import styled from 'styled-components';
import {HeadLine1, LoginForm} from '@/component';

export default function LoginPage() {
  return (
    <Container>
      <HeadLine1>로그인</HeadLine1>
      <LoginForm/>
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