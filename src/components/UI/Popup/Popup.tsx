import { ReactNode } from "react"

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
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
          <div className="absolute inset-0 bg-black opacity-75" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" />
        <div
          className="inline-block align-bottom
            bg-white rounded-lg text-left overflow-hidden shadow-xl
            transform transition-all
            sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
            dark:bg-gray-700"
        >
          <div className="p-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-100">
                  {title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-500">
                  {content}
                </p>
              </div>
            </div>
          </div>
          {close &&
            <div className="bg-gray-100 p-4 sm:flex sm:flex-row-reverse dark:bg-gray-800">
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

export default Popup