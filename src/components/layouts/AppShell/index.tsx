import React from 'react';
import Navbar from '@/components/layouts/Navbar';

type AppShellProps = {
  children: React.ReactNode;
};

export default function index(props: AppShellProps) {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
