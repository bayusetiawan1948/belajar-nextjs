import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';

export default function Home() {
  const { query } = useRouter();
  return (
    <>
      <div>Product : {query.id}</div>
    </>
  );
}
