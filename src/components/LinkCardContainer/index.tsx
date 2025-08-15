import React, { ReactNode } from 'react';
import clsx from 'clsx';


export default function LinkCard({ children }: { children: ReactNode }) {
  return (
    <section className={clsx('row')}>
      {children}
    </section>
  );
}