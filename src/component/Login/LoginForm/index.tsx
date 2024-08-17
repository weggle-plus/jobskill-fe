import {Button, Input} from '@/component';
import {InputHTMLAttributes} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/navigation';

interface Props extends InputHTMLAttributes<HTMLFormElement> {

}

export default function LoginForm({onSubmit}: Props) {
  const router = useRouter();

  const signUpButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push('/sign-up');
  };
  return (
    <FormContainer onSubmit={onSubmit}>
      <Input label={'이메일'} placeholder={'이메일을 입력해주세요'} type={'email'}/>
      <Input label={'비밀번호'} placeholder={'비밀번호를 입력해주세요'} type={'password'}/>
      <Button variant={'primary'} type={'submit'}>로그인</Button>
      <Button variant={'secondary'} onClick={signUpButtonOnClick}>회원가입</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
`;