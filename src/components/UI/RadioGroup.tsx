import React, { isValidElement, useState } from 'react';
import {BiRadioCircleMarked, BiRadioCircle} from 'react-icons/bi'

interface RadioOptionProps {
  title: string,
  subtitle: string,
  icon: React.ReactNode,
  defaultValue?: boolean
}

export const RadioOption = ({title, subtitle, icon, defaultValue}: RadioOptionProps) => {
  const [selected, setSelected] = useState(defaultValue ?? false);

  return (
    <label
      className={`flex items-center
        py-[10px] px-3 mb-2 rounded-[3px]
        cursor-pointer transition-all ease-linear ${
          selected ? 'bg-gray-600 bg-opacity-60 text-gray-300'
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
        <div className="text-gray-500 text-sm mt-1">{subtitle}</div>
      </div>
      <div className='radio-group-icon'>
        {selected ? <BiRadioCircleMarked /> : <BiRadioCircle />}
      </div>
      <input
        type="radio"
        className="hidden"
        checked={selected}
        onChange={() => setSelected(true)}
      />
    </label>
  );
};

const RadioGroup = ({children}: {children: React.ReactNode}) => {
  const value = children?.valueOf();

  if (Array.isArray(value) && value.length) {
    console.log(value[0]);
  }

  return (
    <div>{children}</div>
  );
};

RadioGroup.Option = RadioOption

export default RadioGroup