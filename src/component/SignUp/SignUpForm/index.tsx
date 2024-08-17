import {Button, CheckBox, Input} from '@/component';
import {InputHTMLAttributes} from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLFormElement> {

}

export default function SignUpForm({onSubmit}: Props) {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Input label={'이름'} placeholder={'이름을 입력해주세요'} />
      <Input label={'휴대폰 번호'} placeholder={'예) 01012345678'} />
      <Input label={'이메일'} placeholder={'이메일을 입력해주세요'} type={'email'}/>
      <Input label={'비밀번호'} placeholder={'비밀번호를 입력해주세요'} type={'password'}/>
      <Input label={'비밀번호 재확인'} placeholder={'확인을 위한 비밀번호를 입력하세요.'} type={'password'}/>
      <Agreements>
        <CheckBox label={'약관 전체 동의'} name={'agreeAll'} labelBold={true}/>
        <hr/>
        <CheckBox label={'(필수) 만 14세 이상입니다.'} name={'ageAbove14'}/>
        <CheckBox label={'(필수) 서비스 이용약관 동의'} name={'agreeTermsOfService'}/>
        <CheckBox label={'(필수) 개인정보 수집 및 이용 동의'} name={'agreePrivacyPolicy'}/>
        <CheckBox label={'(선택) 서비스 마케팅 동의'} name={'agreeMarketing'}/>
      </Agreements>
      <Button variant={'primary'}>회원가입</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
`;

const Agreements = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

    hr {
        border: 0;
        margin: 0;
        border-top: 1px solid rgba(112, 115, 124, 0.22);
    }
`;