import { SVGProps } from "react"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Add, Download, Invite, Personalize, Send } from "../assets/Icons"

const Messages = () => {
  return (
    <div className='flex-1 flex'>
      <div className="flex-1 self-end m-4 p-4 pb-2 flex justify-center">
        <div className="max-w-[25rem]">
          <div className="text-center">
            <h1 className="text-[2rem] leading-10 font-bold text-header">
              <p>Welcome to</p>
              <p>New Chat</p>
            </h1>
            <div className="text-sm leading-[18px] text-secondary mt-2 mb-3">
              This is your brand new, shiny server. Here are some steps to help you get started. For more, check out our Getting Started guide.
            </div>
          </div>
          <CardWrapper Icon={Invite} text='Invite your friends' />
          <CardWrapper Icon={Personalize} text='Personalize your server with an icon' />
          <CardWrapper Icon={Send} text='Send your first message' />
          <CardWrapper Icon={Download} text='Download the Discord App' />
          <CardWrapper Icon={Add} text='Add your first app' />
        </div>
      </div>
    </div>
  )
}

interface CardWrapperProps {
  Icon: (props: SVGProps<any>) => JSX.Element,
  text: string
}

const CardWrapper = ({Icon, text}: CardWrapperProps) => {
  return (
    <div className="mt-2 p-4 flex items-center
      rounded-lg bg-gray-200 dark:bg-gray-900 cursor-pointer
      transition-colors duration-100 ease-in-out
      hover:bg-gray-500 hover:bg-opacity-30
      dark:hover:bg-gray-600 dark:hover:bg-opacity-[0.25]">
      <div className="icon-parent"><Icon className='!w-10 !h-10' /></div>
      <div className="flex-1 mx-4 text-sm leading-[18px] font-semibold text-header">{text}</div>
      <div className="icon-parent text-secondary"><MdKeyboardArrowRight /></div>
    </div>
  )
}

export default Messages