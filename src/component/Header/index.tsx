import styled from 'styled-components';
import Image from 'next/image';
import {Button} from '@/component';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Header() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <SideContainer>
        <Link href={'/'}>
          <Image src='/LOGO.png' alt='로고' width={158} height={60}/>
        </Link>

        <Navs>
          <Link className="nav" href={'/assignment'}>과제</Link>
          <Link className="nav" href={'/education'}>교육</Link>
          <Link className="nav" href={'/job'}>채용</Link>
        </Navs>
      </SideContainer>

      <SideButtons>
        <Button variant={'secondary'} onClick={() => router.push('/login')}>로그인/회원가입</Button>
        <Button variant={'primary'} onClick={() => router.push('/business')}>기업서비스</Button>
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
    border-bottom: 1px solid #F0F0F0;
`;

export const SideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    gap: 80px;
`;

export const Navs = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;
    gap: 80px;
    font-size: 15px;
    font-weight: 700;

    .nav {
        cursor: pointer;
        margin: auto;
        color: black;
    }
`;

export const SideButtons = styled.div`
    display: flex;
    gap: 20px;
    margin: 14px 0;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
`;
