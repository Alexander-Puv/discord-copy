import React, { createContext, useState } from 'react'
import { SidebarIconNames } from '../components/Sidebar/SidebarIcon'

interface AppContextProps {
  chosen: string,
  setChosen: (prop: string) => void
}

export const AppContext = createContext<AppContextProps | null>(null)

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