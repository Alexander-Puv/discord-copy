import { ReactNode } from 'react'

interface PopupInputProps {
  icon: ReactNode,
  placeholder: string,
  value: string,
  setValue: (prop: string) => void
}

const PopupInput = ({icon, placeholder, value, setValue}: PopupInputProps) => {

  return (
    <div className='relative'>
      <div className='absolute top-3 left-2 icon-parent text-normal w-[16px] h-[16px]'>{icon}</div>
      <input
        className='h-10 w-full p-[10px] pl-7 rounded-[3px] outline-none
        bg-gray-950 text-normal text-base
        placeholder:text-gray-500 placeholder:text-opacity-[0.65]'
        placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default PopupInput