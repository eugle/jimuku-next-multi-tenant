"use client";

import { ContextProvider } from './Context'
import ContextLayout from './ContextLayout'
import Banner from '@/app/official/home/banner'
import Menus from '@/app/official/home/menus'
import Footer from '@/app/official/home/footer'

export function ClientLayout({ children }) {
  return (
      <ContextProvider>
        <ContextLayout>
          <Banner/>
          <Menus/>
          {children}
          <Footer/>
        </ContextLayout>
      </ContextProvider>
  );
}