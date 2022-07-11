import React from 'react'

export default function ErrorForm({children}) {
  return (
    <div className="my-3 px-5 py-2 bg-red-500 text-white">
       {children}
    </div>
  )
}
