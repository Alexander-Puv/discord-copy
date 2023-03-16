import { ReactNode } from "react"
import Block from "./components/PopupBlock"

interface PopupContentProps {
  title: string,
  content: ReactNode,
  close?: {
    text: string,
    disabled?: boolean,
    onClick?: () => void
  }
}

interface PopupProps {
  isOpen: boolean,
  setIsOpen: (prop: boolean) => void,
  popupContent: PopupContentProps
}

const Popup = ({isOpen, setIsOpen, popupContent: {close, content, title}}: PopupProps) => {
  return <>
    <div className={`fixed inset-0 overflow-y-auto ${isOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'} transition-all ease-linear`}>
      <div className="block min-h-screen text-center p-0">
        <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black opacity-75" />
        </div>
        <span className="inline-block align-middle h-screen" />
        <div className="inline-block align-middle max-w-[460px] w-full
          bg-white rounded-xl shadow-xl overflow-hidden
          transform transition-all
          dark:bg-gray-700"
        >
          <div className="p-4 text-left">
            <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-500">
              {content}
            </p>
          </div>
          {close &&
            <div className="flex flex-row-reverse bg-gray-100 p-4 dark:bg-gray-800">
              <button
                className={`button bg-brand rounded-[3px] text-white
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
                className="button text-gray-600 text-opacity-80 hover:underline dark:text-white"
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

Popup.Block = Block

export default Popup