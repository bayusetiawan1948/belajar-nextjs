import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Shop() {
  const router = useRouter();
  const handlingSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const [username, password] = [
      event.currentTarget.username.value,
      event.currentTarget.password.value,
    ];
    localStorage.setItem(
      'session',
      JSON.stringify({
        username,
        password,
      })
    );
    router.push('/product');
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="p-4 flex flex-col justify-center items-center gap-6 border-gray-500 border-2 rounded-xl w-max"
        action=""
        method="post"
        onSubmit={handlingSubmit}
      >
        <p className="text-xl font-medium">Login Your Account</p>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col justify-start items-start gap-1">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="py-2 px-4 border-gray-500 border-2 rounded-lg w-64"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="******"
              className="py-2 px-4 border-gray-500 border-2 rounded-lg w-64"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 w-full">
          <button
            className="bg-gray-700 text-white rounded-lg px-4 py-2"
            type="submit"
          >
            Login
          </button>
          <p className="text-sm self-center">
            Doesnt have account ?{' '}
            <Link href="/auth/register" className="text-blue-400 underline">
              Click here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
