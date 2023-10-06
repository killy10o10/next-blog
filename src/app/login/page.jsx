'use client';

import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const { data: session, status } = useSession();
  console.log(session, status);
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const handleGoogleLogin = () => {
    signIn('google');
  };

  const handleGithubLogin = () => {
    signIn('github');
  };

  const handleFacebookLogin = () => {
    signIn('facebook');
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
            className="font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-red-500 py-4 w- rounded-lg"
          >
            Sign in with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-blue-gray-500 py-4 rounded-lg"
          >
            Sign in with GitHub
          </button>
          <button
            type="button"
            onClick={handleFacebookLogin}
            className="font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-blue-500 py-4  rounded-lg"
          >
            Sign in with Facebook
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
