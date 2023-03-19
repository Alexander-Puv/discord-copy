import { ReactNode, createContext, useContext, useState } from 'react'

interface RadioContextProps {
  selected: string,
  setSelected: (prop: string) => void
}

export const RadioContext = createContext<RadioContextProps | null>(null)

export const useRadioContext = () => {
  const context = useContext(RadioContext)

  if (context === null) {
    throw new Error("Somthing went wrong with useRadioContext. Please make sure you are using it within the RadioContextProvider")
  }

  return context
}

const RadioContextProvider = ({children}: {children: ReactNode}) => {
  const [selected, setSelected] = useState('')

  return (
    <RadioContext.Provider value={{
      selected, setSelected
    }}>
      {children}
    </RadioContext.Provider>
  )
}

export default RadioContextProvider