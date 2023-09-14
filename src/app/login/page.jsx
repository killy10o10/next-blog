function LoginPage() {
  return (
    <div className="min-h-screen text-inherit flex flex-col justify-center">
      <div className='flex gap-4 rounded-xl flex-col items-center'>
        <button className='font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-red-500 py-4 w-  rounded-lg'>Sign in with Google</button>
        <button className='font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-blue-gray-500 py-4 rounded-lg'>Sign in with GitHub</button>
        <button className='font-bold active:scale-95 transition shadow-lg text-xl w-4/6 lg:w-3/6 text-slate-100 bg-blue-500 py-4  rounded-lg'>Sign in with Facebook</button>
      </div>
    </div>
  )
}

export default LoginPage
