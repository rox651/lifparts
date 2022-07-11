import React from 'react'

export default function ContactInfo({title,info}) {
  return (
    <article>
        <h3 className='font-black text-2xl  my-2'>{title}</h3>
        {info}
    </article>
  )
}
