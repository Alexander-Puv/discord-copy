import { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import {
  BsEmojiAngryFill,
  BsEmojiExpressionlessFill, BsEmojiHeartEyesFill,
  BsEmojiKissFill,
  BsEmojiLaughingFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  BsEmojiSmileUpsideDownFill,
  BsEmojiSunglassesFill
} from 'react-icons/bs'
import { FaStickyNote } from 'react-icons/fa'
import { HiGif } from 'react-icons/hi2'
import { useChannelSidebarContext } from '../../../contexts/ChannelSidebarContext'

const emoji = [<BsEmojiNeutralFill />, <BsEmojiLaughingFill />, <BsEmojiSmileFill />,
  <BsEmojiSmileUpsideDownFill />, <BsEmojiKissFill />, <BsEmojiHeartEyesFill />,
  <BsEmojiSunglassesFill />, <BsEmojiExpressionlessFill />, <BsEmojiAngryFill />]

const SendMessage = () => {
  const [chosenEmoji, setChosenEmoji] = useState(0)
  const {chosenChnl} = useChannelSidebarContext()

  const changeEmoji = () => {
    if (chosenEmoji === emoji.length - 1) {
      // if last emoji, set the first emoji
      setChosenEmoji(0)
    } else {
      // otherwise set next emoji
      setChosenEmoji(chosenEmoji + 1)
    }
  }

  return (
    <div className='px-4 mb-6'>
      <div className="relative max-h-[50vh]
        flex items-center px-4 rounded-lg text-secondary
        dark:bg-gray-600 dark:bg-opacity-30">
        <div className="flex items-center -ml-4 px-4
          icon-parent h4-hover cursor-pointer">
          <AiFillPlusCircle />
        </div>
        <div className="relative flex-1 min-h-[2.75rem]
          h3 font-normal leading-[1.375rem] cursor-text">
          <div className="absolute left-0 py-[11px] pr-[10px] text-gray-500 text-opacity-40
            whitespace-nowrap overflow-ellipsis overflow-hidden">
            Message #{chosenChnl.title}</div>
        </div>
        <div className="flex">
          <div className="icon-parent px-2 py-1 h4-hover"><HiGif /></div>
          <div className="icon-parent px-2 py-1 h4-hover"><FaStickyNote /></div>
          <div className="icon-parent px-2 py-1 h4-hover transition-all ease-in hover:scale-[1.14]" onMouseEnter={changeEmoji}>
            {emoji[chosenEmoji]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMessage