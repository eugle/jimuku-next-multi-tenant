"use client";

import { ContextProvider } from './Context'
import ContextLayout from './ContextLayout'

export function ClientLayout({ children }) {
  return (
      <ContextProvider>
        <ContextLayout>
          {children}
        </ContextLayout>
      </ContextProvider>
  );
}