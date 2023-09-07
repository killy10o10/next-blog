import Link from 'next/link'
import React from 'react'

function AuthLink() {
  const status = "notauthenticated"

  return (
    <>
     {
      status === "notauthenticated" ? <Link className='gradient-text' href="/login">Login</Link> :
       <span className='cursor-pointer gradient-text'>Logout</span> 
     } 
    </>
  )
}

export default AuthLink