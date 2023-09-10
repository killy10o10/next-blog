import Image from 'next/image'
import React from 'react'

function Featured() {
  return (
    <div className='grid md:grid-cols-2 gap-5 justify-center'>
        <div className='flex items-center justify-end'>
          <Image className='m-0 w-[100%] h-[100%] object-cover' src="/blog1.jpg" width={300} height={300} alt='blog1' />
        </div>
        <div className="prose text-inherit">
          <h2 className="text-inherit">Garlic bread with cheese: What the science tells us</h2>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their
            children, with the food earning such an iconic status in our culture that kids will often dress
            up as warm, cheesy loaf for Halloween.
          </p>
          <button className='btn btn-neutral'>Read more</button>
        </div>
    </div>
  )
}

export default Featured
