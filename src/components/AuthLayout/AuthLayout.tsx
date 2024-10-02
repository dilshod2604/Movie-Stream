import React, { ReactNode } from 'react'
interface AuthLayoutProps{
    children:ReactNode
}
const AuthLayout:React.FC<AuthLayoutProps> = ({children}) => {
  return (
    <div>
        <main>{children}</main>
    </div>
  )
}

export default AuthLayout