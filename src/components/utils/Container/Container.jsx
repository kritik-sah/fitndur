import React from 'react'

const Container = ({children}) => {
  return (
    <div className="max-w-screen-2xl m-auto px-2 md:px-4 relative">{children}</div>
  )
}

export default Container