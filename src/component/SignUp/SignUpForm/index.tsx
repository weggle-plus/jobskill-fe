import {Button, CheckBox, Input} from '@/component';
import styled from 'styled-components';
import {Controller, useForm} from 'react-hook-form';
import {ChangeEvent, useState} from 'react';
import Info12 from '@/assets/icon/info-12.svg';

const AGREEMENTS = [
  {id: 'ageAbove14', label: '(필수) 만 14세 이상입니다.'},
  {id: 'agreeTermsOfService', label: '(필수) 서비스 이용약관 동의'},
  {id: 'agreePrivacyPolicy', label: '(필수) 개인정보 수집 및 이용 동의'},
  {id: 'isMarketingAgree', label: '(선택) 서비스 마케팅 동의'},
];

export default function SignUpForm() {
  const [checkItems, setCheckItems] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    control,
    watch,
  } = useForm(
    {
      defaultValues: {
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
        checkedPassword: '',
      }
    }
  );

  const handleCheck = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    if (event.target.checked) {
      setCheckItems([...checkItems, id]);
    } else {
      setCheckItems(checkItems.filter((item) => item !== id));
    }
  };

  const handleAllCheck = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setCheckItems(AGREEMENTS.map(({id}) => id));
    } else {
      setCheckItems([]);
    }
  };

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const requestBody = {
      ...data,
      isMarketingAgree: checkItems.includes('isMarketingAgree'),
    };
    console.log('test');
    console.log(data);
    console.log(requestBody);
    // await signUp(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{required: true}}
        render={({field}) => <Input label={'이름'} placeholder={'이름을 입력해주세요'} {...field} />}
      />
      <Controller
        name="phoneNumber"
        control={control}
        rules={{required: true}}
        render={({field}) => <Input label={'휴대폰 번호'} placeholder={'예) 01012345678'} {...field}/>}
      />
      <Controller
        name="email"
        control={control}
        rules={{required: true}}
        render={({field}) => <Input label={'이메일'} placeholder={'이메일을 입력해주세요'} type={'email'} {...field}/>}
      />
      <div>
        <Input label={'비밀번호'} placeholder={'비밀번호를 입력해주세요'}
          type={'password'}
          {...register('password', {required: true})}/>
        <PasswordInfo>
          <Info12/>
            영문 대소문자, 숫자, 특수문자를 3가지 이상으로 조합해 8자 이상
            16자 이하로 입력해주세요.
        </PasswordInfo>
      </div>
      <Input label={'비밀번호 재확인'} placeholder={'확인을 위한 비밀번호를 입력하세요.'}
        type={'password'} {...register('checkedPassword', {required: true})}/>
      <Agreements>
        <CheckBox
          label={'약관 전체 동의'}
          name={'agreeAll'}
          labelBold
          onChange={handleAllCheck}
          checked={AGREEMENTS.length == checkItems.length}/>
        <hr/>
        {AGREEMENTS.map(({id, label}) => (
          <CheckBox key={id}
            label={label}
            name={id}
            checked={checkItems.includes(id)}
            onChange={(event) => handleCheck(event, id)}/>))}
      </Agreements>
      <Button variant={'primary'} type={'submit'} form={'signUpForm'}>회원가입</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
    display: inline-flex;
    flex-direction: column;
    gap: 14px;
    width: 100%;
`;

const PasswordInfo = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    color: #868686;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-top: 8px;
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