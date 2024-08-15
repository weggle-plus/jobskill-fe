import styled from 'styled-components';
import Image from 'next/image';
import {Button} from '@/component';

export default function Header() {
  return (
    <HeaderContainer>
      <SideContainer>
        <Image src='/LOGO.png' alt='로고' width={158} height={60}/>

        <Navs>
          <Nav>과제</Nav>
          <Nav>교육</Nav>
          <Nav>채용</Nav>
        </Navs>
      </SideContainer>

      <SideButtons>
        <Button type={'secondary'}>로그인/회원가입</Button>
        <Button type={'primary'}>기업서비스</Button>
      </SideButtons>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.header`
    height: 60px;
    padding-inline: 50px;
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
`;

export const SideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    gap: 20px;
`

export const Navs = styled.ul`
    display: flex;
    flex-direction: row;
    justify-items: center;
    gap: 80px;
    font-size: 15px;
    font-weight: 700;
`;

export const Nav = styled.li`
    cursor: pointer;
    list-style-type: none;
    margin: auto;
`;

export const SideButtons = styled.div`
    display: flex;
    gap: 20px;
    margin: 14px 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;
