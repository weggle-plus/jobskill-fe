'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <FooterContainer>
      <TopContainer>
        <Image src={'/Logo.png'} alt={'로고'} width={158} height={60}/>
        <Link href={'/help'}>
            FAQ
        </Link>
      </TopContainer>
      <CompanyIntroduction>
        위글 플러스
      </CompanyIntroduction>
      <BottomContainer>
        <Link href={'/terms'}>
              이용약관
        </Link>
        <Link href={'/privacy'}>
            개인정보 처리방침
        </Link>
      </BottomContainer>
    </FooterContainer>
  );
}

export const FooterContainer = styled.footer`
    min-height: 188px;
    padding: 50px 41px;
    border-top: 1px solid #F0F0F0;
    display: flex;
    gap: 46px;
    flex-direction: column;
`;

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 300px;

    a {
        color: #000;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
    `;

export const CompanyIntroduction = styled.div`
    color: #666;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`;

export const BottomContainer = styled.div`
    display: flex;
    gap: 50px;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    

    a {
        color: #666666;
    }
`;