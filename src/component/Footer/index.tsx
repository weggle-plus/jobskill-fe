'use client';

import styled from 'styled-components';
import Link from 'next/link';
import {HeadLine2} from '@/component';

export default function Footer() {
  return (
    <footer>
      <FooterContent>
        <TopContainer>
          <div className={'top'}>
            <HeadLine2>위글 플러스</HeadLine2>
            <Link href={'/help'}>
            FAQ
            </Link>
          </div>
          <CompanyIntroduction>
            <p>고객정보보호 책임자 오대호</p>
            <p>
              이메일&nbsp;
              <a href="mailto:aswq27005308@gmail.com">aswq27005308@gmail.com</a>
            </p>
          </CompanyIntroduction>
        </TopContainer>
        <BottomContainer>
          <Link href={'/terms'}>
              이용약관
          </Link>
          <Link href={'/privacy'}>
            개인정보 처리방침
          </Link>
        </BottomContainer>
        <CopyLight>© 2021 WIGGLE. All rights reserved.</CopyLight>
      </FooterContent>
    </footer>
  );
}

export const FooterContent = styled.div`
    padding: 20px 200px;
    border-top: 1px solid #F0F0F0;
    display: flex;
    gap: 20px;
    flex-direction: column;
`;

export const TopContainer = styled.div`
    .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 300px;
    }

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
  
   a {
     color: #666;
     font-size: 14px;
     font-style: normal;
     font-weight: 400;
     line-height: 18px;
   }
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

export const CopyLight = styled.p`
  color: rgba(102, 102, 102, 0.40);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;