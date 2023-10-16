'use client';

import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc/"

function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleGoogleLogin = () => {
    signIn('google');
  };

  return (
    <div className="min-h-screen text-inherit flex flex-col justify-center">
      {status === 'loading' ? ( // Show loading message while checking authentication
        <div className="text-center font-bold text-2xl text-yellow-400 min-h-screen flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="flex gap-4 rounded-xl flex-col items-center">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 px-2 font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-700 bg-white py-4  rounded-lg"
          >
            <FcGoogle className='text-3xl' />
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
