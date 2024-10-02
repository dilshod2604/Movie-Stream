import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'
interface LoginButtonProps{
    className?:string,
    icon:IconType
    iconSize?:number
    iconStyle?:string
    children:ReactNode
    onClick?:()=>void
}
const LoginButton:React.FC<LoginButtonProps> = ({className,icon,iconStyle,children,iconSize,onClick}) => {
    const Icon=icon
  return (
    <button className={twMerge(`flex items-center justify-center gap-x-2 text-white rounded-xl bg-neutral-900 px-[40px] py-2`,className)}
    onClick={onClick}
    >
    <Icon size={iconSize} className={twMerge(`text-white`,iconStyle)}/>
     {children}
    </button>
  )
}

export default LoginButton