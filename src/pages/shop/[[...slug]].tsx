import { useRouter } from 'next/router';

export default function Shop() {
  const { query } = useRouter();
  console.log(query);
  return (
    <>
      <div>Product :</div>
    </>
  );
}
