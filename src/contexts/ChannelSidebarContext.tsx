import React, { createContext, useContext, useState } from 'react'
import { SidebarIconNames } from '../components/Sidebar/SidebarIcon'
import { defaultChannel } from '../components/ChannelsSidebar/utils/categories'

interface ChannelSidebarProps {
  chosenChnl: string,
  setChosenChnl: (prop: string) => void,
  isPopupOpen: boolean,
  setIsPopupOpen: (prop: boolean) => void,
  popupTitle: string,
  setPopupTitle: (prop: string) => void,
}

export const ChannelSidebar = createContext<ChannelSidebarProps | null>(null)

export const useChannelSidebarContext = () => {
  const context = useContext(ChannelSidebar)

  if (context === null) {
    throw new Error("Somthing went wrong with useChannelSidebarContext. Please make sure you are using it within the ChannelSidebarContext")
  }

  return context
}

const ChannelSidebarContext = ({children}: {children: React.ReactNode}) => {
  const [chosenChnl, setChosenChnl] = useState(defaultChannel)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [popupTitle, setPopupTitle] = useState('')

  return (
    <ChannelSidebar.Provider value={{
      chosenChnl, setChosenChnl,
      isPopupOpen, setIsPopupOpen,
      popupTitle, setPopupTitle
    }}>
      {children}
    </ChannelSidebar.Provider>
  )
}

export default ChannelSidebarContext