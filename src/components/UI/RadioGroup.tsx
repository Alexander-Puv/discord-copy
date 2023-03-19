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
    <label
      className={`flex items-center
        py-[10px] px-3 mb-2 rounded-[3px]
        cursor-pointer transition-all ease-linear ${
          isSelected ? 'bg-gray-600 bg-opacity-60 text-gray-300'
            : `bg-gray-800 text-gray-500
              hover:bg-gray-600 hover:bg-opacity-30 hover:text-gray-300
              active:bg-opacity-[0.48]`
        }`}
    >
      <div className='radio-group-icon w-[18px] h-[18px]'>
        {icon}
      </div>
      <div className="ml-3 mr-2 flex-1">
        <div className="text-base font-medium">{title}</div>
        {subtitle && <div className="text-gray-500 text-sm mt-1">{subtitle}</div>}
      </div>
      <div className='radio-group-icon'>
        {isSelected ? <BiRadioCircleMarked /> : <BiRadioCircle />}
      </div>
      <input
        type="radio"
        className="hidden"
        checked={isSelected}
        onChange={() => setSelected(value)}
      />
    </label>
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