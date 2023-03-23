import { ReactNode } from "react"

interface PopupBlockProps {
  title: string,
  children?: ReactNode
}

const PopupBlock = ({title, children}: PopupBlockProps) => {
  return (
    <div className="mb-5">
      <h4 className="mb-2 h4 font-bold tracking-wide">
        {title.toUpperCase()}
      </h4>
      {children}
    </div>
  )
}

export default PopupBlock