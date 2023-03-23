import PopupBlock from "./components/PopupBlock"
import { ReactNode } from 'react'
import PopupInput from "./components/PopupInput"
import { VscClose } from 'react-icons/vsc'

interface PopupContentProps {
  title: string,
  subtitle: string,
  close?: {
    text: string,
    disabled?: boolean,
    onClick?: () => void
  }
}

interface PopupProps {
  isOpen: boolean,
  setIsOpen: (prop: boolean) => void,
  children: ReactNode,
  popupContent: PopupContentProps
}

const Popup = ({isOpen, setIsOpen, children, popupContent: {close, title, subtitle}}: PopupProps) => {
  return <>
    <div className={`fixed inset-0 overflow-y-auto ${isOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'} transition-all ease-linear`}>
      <div className="block min-h-screen text-center p-0">
        <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black opacity-75" />
        </div>
        <span className="inline-block align-middle h-screen" />
        <div className="relative inline-block align-middle max-w-[460px] w-full
          bg-white rounded-xl shadow-xl overflow-hidden text-left
          transform transition-all
          dark:bg-gray-700"
        >
          <div className="absolute top-3 right-3 p-1 icon-parent opacity-50
            cursor-pointer transition-all ease-linear hover:opacity-100"
            onClick={() => setIsOpen(false)}>
            <VscClose />
          </div>
          <div className="p-4">
            <h2 className="h2">
              {title}
            </h2>
            <h4 className="h4">
              {subtitle}
            </h4>
          </div>
          <div className="flex flex-col px-4">
            {children}
          </div>
          {close &&
            <div className="flex flex-row-reverse bg-gray-100 p-4 dark:bg-gray-800">
              <button
                className={`popup-button bg-brand rounded-[3px] text-white
                  transition-all ease-linear
                  ${close.disabled ? 'text-opacity-50 cursor-default'
                  : 'hover:bg-blue-700 active:bg-blue-800'}`}
                onClick={() => {
                  close.onClick && close.onClick();
                  setIsOpen(false)}}
                disabled={close.disabled}
              >
                {close.text}
              </button>
              <button
                className="popup-button text-gray-600 text-opacity-80 hover:underline dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  </>
}

Popup.Block = PopupBlock
Popup.Input = PopupInput

export default Popup