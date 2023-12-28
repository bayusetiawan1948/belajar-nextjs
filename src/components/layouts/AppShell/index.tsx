import React from 'react';
import Navbar from '@/components/layouts/Navbar';
import { useRouter } from 'next/router';

type AppShellProps = {
  children: React.ReactNode;
};
const disableNavbar = ['/auth/login', '/auth/register'];

export default function index(props: AppShellProps) {
  const { children } = props;
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
}
