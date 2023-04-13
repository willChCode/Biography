import React from 'react';
import { Props } from '../interfaces/Interface';
import Footer from './Footer';

export default function Layout({ children }: Props) {
  return (
    <div className='layout'>
      <main className='body text-[#030329] '>{children}</main>
      <Footer />
    </div>
  );
}
