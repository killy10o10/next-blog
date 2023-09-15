import { signOut } from 'next-auth/react'
import Link from 'next/link'

function AuthLink() {
  const status = "authenticated"

  const handleSignout = () => {
    signOut()
  }

  return (
    <>
     {
      status === "notauthenticated" ? <Link className='gradient-text' href="/login">Login</Link> :
     <div className='flex items-center gap-2'>
        <Link className='gradient-text' href="/write">Write</Link>
        <span onClick={handleSignout} className='cursor-pointer gradient-text'>Logout</span> 
     </div>
     } 
    </>
  )
}

export default AuthLink