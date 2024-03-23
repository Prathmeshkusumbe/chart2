import React from 'react'

function Card({children}) {
  return (
    <div className='shadow rounded-lg p-4'>{children}</div>
  )
}

export default Card