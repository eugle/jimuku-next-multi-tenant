"use client";

import { ContextProvider } from './Context'
// import ContextLayout from './ContextLayout'
import Banner from '@/app/official/home/banner';
import Header from '@/app/official/home/header';
import Footer from '@/app/official/home/footer';

export function ClientLayout({ children }) {
  return (
      <ContextProvider>
        {/* <ContextLayout> */}
          <Banner />
          <Header />
          {children}
          <Footer />
        {/* </ContextLayout> */}
      </ContextProvider>
  );
}