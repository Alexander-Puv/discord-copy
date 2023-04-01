import { useState, useRef, useEffect } from 'react'
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
  const [message, setMessage] = useState('')
  const contentEditableRef = useRef<HTMLDivElement>(null)
  const cursorPosition = useRef(0)

  useEffect(() => {
    // Restore cursor position after updating message state
    const element = contentEditableRef.current
    if (element) {
      const range = document.createRange()
      const selection = window.getSelection()
      const childNode = element.childNodes[0] as HTMLElement
      if (childNode) {
        range.setStart(childNode, Math.min(cursorPosition.current, childNode.textContent?.length || 0))
        range.collapse(true)
        selection?.removeAllRanges()
        selection?.addRange(range)
      }
    }
  }, [message])

  const handleInput = () => {
    const element = contentEditableRef.current
    const selection = window.getSelection()
    if (element && selection) {
      const range = selection.getRangeAt(0)
      cursorPosition.current = range.startOffset
      setMessage(element.innerHTML)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }
  
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
          {!message &&
          <div className="absolute left-0 py-[11px] pr-[10px]
            text-gray-500 text-opacity-40
            whitespace-nowrap overflow-ellipsis overflow-hidden">
            Message #{chosenChnl.title}</div>}
          <div className="relative z-10 flex-1 py-[11px] pr-[10px] outline-none whitespace-pre-wrap"
            contentEditable onInput={handleInput}
            onKeyDown={handleKeyDown}
            dangerouslySetInnerHTML={{ __html: message }}
            ref={contentEditableRef}></div>
        </div>
        <div className="flex -mr-[6px]">
          <div className="icon-parent px-2 py-1 h4-hover"><HiGif /></div>
          <div className="icon-parent px-2 py-1 h4-hover"><FaStickyNote /></div>
          <div className="icon-parent px-2 py-1 h4-hover transition-all ease-in
            hover:scale-[1.14]" onMouseEnter={changeEmoji}>
            {emoji[chosenEmoji]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMessage