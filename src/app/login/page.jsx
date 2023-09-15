"use client"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

function LoginPage() {

  const {data, status} = useSession();

  const router = useRouter()

  if(status === "loading") {
    return <div className="text-center font-bold text-2xl text-yellow-400 min-h-screen flex justify-center items-center">Loading...</div>
  }

  if(status === "authenticated") {
    router.push("/") 
  }

  console.log(data, status)

  const handleGoogleLogin = () => {
    signIn("google");
  }
  const handleGithubleLogin = () => {
    signIn("google");
  }
  const handleFacebookleLogin = () => {
    signIn("google");
  }

  return (
    <div className="min-h-screen text-inherit flex flex-col justify-center">
      <div className='flex gap-4 rounded-xl flex-col items-center'>
        <button onClick={handleGoogleLogin} className='font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-red-500 py-4 w-  rounded-lg'>Sign in with Google</button>
        <button onClick={handleGithubleLogin} className='font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-blue-gray-500 py-4 rounded-lg'>Sign in with GitHub</button>
        <button onClick={handleFacebookleLogin} className='font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-blue-500 py-4  rounded-lg'>Sign in with Facebook</button>
      </div>
    </div>
  )
}

export default LoginPage
