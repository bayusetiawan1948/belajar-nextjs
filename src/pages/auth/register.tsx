import Link from 'next/link';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function register() {
  const router = useRouter();
  const handlingRegister: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const [username, password, repassword] = [
      event.currentTarget.username.value,
      event.currentTarget.password.value,
      event.currentTarget.repassword.value,
    ];

    if (password !== repassword) {
      toast.error('Password tidak sama', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return 0;
    }

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
        onSubmit={handlingRegister}
      >
        <p className="text-xl font-medium">Create Your Account</p>
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
          <div className="flex flex-col justify-start items-start gap-1">
            <label htmlFor="repassword">Enter again Password</label>
            <input
              type="password"
              id="repassword"
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
            Register
          </button>
          <p className="text-sm self-center">
            Having a account ?
            <Link href="/auth/login" className="text-blue-400 underline">
              Click here
            </Link>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
