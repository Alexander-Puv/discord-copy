import React, { createContext, useContext, useState } from 'react'
import { SidebarIconNames } from '../components/Sidebar/SidebarIcon'

interface AppContextProps {
  chosen: string,
  setChosen: (prop: string) => void
}

export const AppContext = createContext<AppContextProps | null>(null)

export const useAppContext = () => {
  const context = useContext(AppContext)

  if (context === null) {
    throw new Error("Somthing went wrong with useAppContext. Please make sure you are using it within the AppContextProvider")
  }

  return context
}

const AppContextProvider = ({children}: {children: React.ReactNode}) => {
  const [chosen, setChosen] = useState<string>(SidebarIconNames.discord)

  return (
    <AppContext.Provider value={{
      chosen, setChosen
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider