import React from 'react'

const CategoryChip = ({category}) => {
  return (
    <>
      <button className={`bg-${category} px-6 py-1 font-bold rounded-lg text-slate-900 capitalize shadow-lg`}>{category}</button>
    </>
  )
}

export default CategoryChip
