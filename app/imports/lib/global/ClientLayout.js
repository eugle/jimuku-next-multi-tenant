"use client";

import { ContextProvider } from './Context'
import ContextLayout from './ContextLayout'
import Banner from '@/app/official/home/banner';
import Header from '@/app/official/home/header2';
import Footer from '@/app/official/home/footers';

export function ClientLayout({ children }) {
  return (
      <ContextProvider>
        <ContextLayout>
          <Banner />
          <Header />
          {children}
          <Footer />
        </ContextLayout>
      </ContextProvider>
  );
}