import { ReactNode } from "react"

interface PopupContentProps {
  title: string,
  content: ReactNode,
  close: {
    text: string,
    onClick?: () => void
  }
}

interface PopupProps {
  isOpen: boolean,
  setIsOpen: (prop: boolean) => void,
  popupContent: PopupContentProps
}

const Popup = ({isOpen, setIsOpen, popupContent}: PopupProps) => {
  return <>
    {isOpen && 
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" onClick={() => setIsOpen(false)}>
            <div className="absolute inset-0 bg-[black] opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            className="inline-block align-bottom
              bg-white rounded-lg text-left overflow-hidden shadow-xl
              transform transition-all
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">

                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    {popupContent.title}
                  </h3>

                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {popupContent.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                className="w-full inline-flex justify-center  px-4 py-2
                  bg-brand text-base font-medium text-white hover:bg-blue-700
                  rounded-md border border-transparent shadow-sm
                  transition-all ease-linear
                  active:bg-blue-800
                  sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => {
                  popupContent.close.onClick && popupContent.close.onClick();
                  setIsOpen(false)
                }}
              >
                {popupContent.close.text}
              </button>
              <button
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    }
  </>
}

export default Popup