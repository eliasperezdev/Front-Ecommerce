import React from 'react'

export default function Error({message}) {
  return (
    <div className="p-4 mb-4 text-md text-red-800 rounded-lg bg-red-100 my-4" role="alert">
        <span className="font-medium">¡Error!</span> {message}
    </div>
  )
}
