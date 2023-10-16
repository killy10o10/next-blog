import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

function AuthLink() {
  const {status, data} = useSession()
  
  const handleSignout = () => {
    signOut()
  }

  return (
    <>
     {
      status === "unauthenticated" || status === "loading" ? <button className='gradient-text' type='button' onClick={() => signIn()}>Login</button> :
     <div className='flex items-center justify-center gap-2'>
        <Link className='gradient-text' href="/write">Write</Link>
        <div onClick={handleSignout} className='cursor-pointer h-8 w-8 relative flex items-center'>
          <Image src={data.user.image} width={32} height={32} className='inline-block rounded-full' alt='profile-pic' />
        </div> 
     </div>
     } 
    </>
  )
}

export default AuthLink