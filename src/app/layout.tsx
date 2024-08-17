import type {Metadata} from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import React, {ReactNode} from 'react';
import {Header, PageContainer} from '@/component';
import '@/styles/reset.css';
import '@/styles/global.css';
import Footer from '@/component/Footer';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'JobSkill',
  description: 'IT 직군의 과제 피드백 기반의 교육 및 채용',
};


const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
    children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>
        <StyledComponentsRegistry>
          <PageContainer>
            <Header/>
            {children}
            <Footer/>
          </PageContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
