import { ReactNode } from "react"

interface PopupBlockProps {
  title: string,
  children?: ReactNode
}

const PopupBlock = ({title, children}: PopupBlockProps) => {
  return (
    <div className="mb-5">
      <h3 className="mb-2 second-title">
        {title.toUpperCase()}
      </h3>
      {children}
    </div>
  )
}

export default PopupBlock