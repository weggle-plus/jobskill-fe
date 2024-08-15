import type {Metadata} from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import React, {ReactNode} from 'react';
import {Header} from '@/component';
import '@/styles/reset.css';
import Footer from '@/component/Footer';

export const metadata: Metadata = {
  title: 'JobSkill',
  description: 'IT 직군의 과제 피드백 기반의 교육 및 채용',
};

export default function RootLayout({
  children,
}: Readonly<{
    children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Header/>
          {children}
          <Footer/>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
