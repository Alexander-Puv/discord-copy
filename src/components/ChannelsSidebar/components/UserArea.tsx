import { useState } from 'react'
import { BsDiscord, BsGearFill } from 'react-icons/bs'
import { MdHeadset, MdHeadsetOff } from 'react-icons/md'
import { TbMicrophone, TbMicrophoneOff } from 'react-icons/tb'

const iconColors = ['bg-icons-red', 'bg-icons-gray', 'bg-icons-blue', 'bg-icons-green, bg-icons-yellow']
const randomIconColor = iconColors[Math.floor(Math.random() * iconColors.length)]

const icons = ['microphone', 'headset', 'gear']

const UserArea = () => {
  const [isMicrophoneWorks, setIsMicrophoneWorks] = useState(false)
  const [isHeadsetWorks, setIsHeadsetWorks] = useState(false)

  return (
    <section className='h-[3.25rem] mt-auto px-2 flex items-center
      bg-gray-200 dark:bg-gray-900 dark:bg-opacity-80 transition-background'>
      <div className='flex items-center mr-2 min-w-[7.5rem] select-text
        hover:bg-gray-500 bg-opacity-50
        hover:dark:bg-gray-600 dark:bg-opacity-[0.55]
        rounded cursor-pointer'>
        <div className={`relative w-8 h-8 flex items-center justify-center rounded-full ${randomIconColor}`}>
          <div className="w-5 h-5 icon-parent"><BsDiscord className='text-white' /></div>
          <div className="absolute -bottom-1 -right-1 bg-gray-100 dark:bg-gray-800
            rounded-full transition-background">
            <div className="p-[3px] bg-gray-200 dark:bg-gray-900 dark:bg-opacity-80
              rounded-full transition-background">
              <div className="w-[10px] h-[10px] bg-green-600 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full min-w-0 mr-1 py-1 pl-2 flex flex-col">
          <div className="text-sm leading-[18px] font-semibold
            w-full text-ellipsis overflow-hidden whitespace-nowrap
            text-gray-800 dark:text-gray-200">Username to show ellipsis</div>
          <h4 className="h4 leading-[13px] w-full
            text-ellipsis overflow-hidden whitespace-nowrap">Status</h4>
        </div>
      </div>
      <div className='flex'>
        {icons.map(icon => {
          const setIcon = () => {
            icon === 'microphone' ? setIsMicrophoneWorks(isMicrophoneWorks ? false: true)
            : icon === 'headset' && setIsHeadsetWorks(isHeadsetWorks ? false: true)
          }
          return (
            <div className="w-8 h-8 flex items-center justify-center
              hover:bg-gray-500 bg-opacity-50
              hover:dark:bg-gray-600 dark:bg-opacity-[0.55]
              rounded group cursor-pointer" key={icon} onClick={setIcon}>
              <div className="w-5 h-5 icon-parent text-secondary
                group-hover:text-gray-800 dark:group-hover:text-gray-300">
                {icon === 'microphone' ? (isMicrophoneWorks ? <TbMicrophone /> : <TbMicrophoneOff />)
                : icon === 'headset' ? (isHeadsetWorks ? <MdHeadset /> : <MdHeadsetOff />)
                : <BsGearFill />}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default UserArea