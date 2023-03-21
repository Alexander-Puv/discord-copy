import React, { isValidElement, useLayoutEffect } from 'react';
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi';
import RadioContextProvider, { useRadioContext } from '../../contexts/RadioContext';

interface RadioOptionProps {
  value: string,
  title: string,
  subtitle?: string,
  icon: React.ReactNode,
  defaultValue?: boolean
}

export const RadioOption = ({value, title, subtitle, icon, defaultValue}: RadioOptionProps) => {
  const {selected, setSelected} = useRadioContext()
  const isSelected = selected === value
  

  useLayoutEffect(() => {
    defaultValue && setSelected(value)
  }, [])

  return (
    <div
      className={`flex items-center
        py-[10px] px-3 mb-2 rounded-[3px]
        cursor-pointer ${
          isSelected ? `bg-gray-600 bg-opacity-[0.17]
          dark:bg-opacity-60 dark:text-gray-300`
            : `bg-gray-100 text-gray-600
              hover:bg-gray-600 hover:bg-opacity-[0.12] hover:text-gray-700
              active:bg-opacity-[0.15]
              dark:bg-gray-800 dark:text-gray-500
              dark:hover:bg-gray-600 dark:hover:bg-opacity-30 dark:hover:text-gray-300
              dark:active:bg-opacity-[0.48]`
        }`}
      onClick={() => setSelected(value)}
    >
      <div className='radio-group-icon w-[18px] h-[18px]'>
        {icon}
      </div>
      <div className="ml-3 mr-2 flex-1">
        <div className="text-gray-700 dark:text-gray-400 text-base font-medium">{title}</div>
        {subtitle && <div className="text-sm mt-1">{subtitle}</div>}
      </div>
      <div className='radio-group-icon'>
        {isSelected ? <BiRadioCircleMarked /> : <BiRadioCircle />}
      </div>
    </div>
  );
};

const RadioGroup = ({children}: {children: React.ReactNode}) => {

  const value = children?.valueOf();

  if (Array.isArray(value) && value.length) {
    value.map(val =>
      isValidElement(val) && val.props
    )
  }

  return (
    <RadioContextProvider>
      <div>{children}</div>
    </RadioContextProvider>
  );
};

RadioGroup.Option = RadioOption

export default RadioGroup