import React from 'react'
interface SwitchButtonProps{
    state:string,
    setSate:React.Dispatch<React.SetStateAction<string>>
    value1:string,
    value2:string
}
const SwitchButton:React.FC<SwitchButtonProps> = ({setSate,state,value1,value2}) => {
    const btn1Style=state===value1
    ?`flex items-center justify-center text-white font-bold px-4 py-2 bg-[#da2f68] rounded-full transition duration-500`
    :`flex items-center justify-center text-black font-bold px-4 py-2 bg-transparent rounded-full`
    const btn2Style=state===value2
    ?`flex items-center justify-center text-white font-bold px-4 py-2 bg-[#da2f68] rounded-full transition duration-500`
    :`flex items-center justify-center text-black font-bold px-4 py-2 bg-transparent rounded-full`

  return (
    <div className='flex px-2 py-2 bg-white rounded-full items-center justify-between '>
        <button className={btn1Style} onClick={()=>setSate(value1)}>{value1}</button>
        <button className={btn2Style} onClick={()=>setSate(value2)}>{value2}</button>

    </div>
  )
}

export default SwitchButton