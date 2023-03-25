import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi'
import { HiSpeakerWave } from 'react-icons/hi2'
import { IoIosArrowDown } from 'react-icons/io'
import { categories } from './categories'

const ChannelsSidebar = () => {
  const defaultChannel = categories[0].channels[0].title
  const [chosenChnl, setChosenChnl] = useState(defaultChannel)

  return (
    <div className='w-60 h-full bg-gray-800'>
      <nav>
        <header className='flex h-12 py-3 px-4 header-shadow cursor-pointer'>
          <h2 className='h2 text-base flex-1'>New Chat</h2>
          <div className="w-[18px] h-[18px] self-center ml-1 icon-parent h3"><IoIosArrowDown /></div>
        </header>
        <ul className='pr-2'>
          {categories.map(category =>
            <li key={category.title} className='pt-4'>
              <div className="relative flex items-center justify-between pl-4 pr-1
                h4 font-semibold tracking-wide h4-hover cursor-pointer">
                <div className='absolute left-[2px] top-[6px] w-3 h-3 icon-parent'><IoIosArrowDown /></div>
                <h4>{category.title.toUpperCase()}</h4>
                <div className='icon-parent'>
                  <BsPlus />
                </div>
              </div>
              <ul>
                {category.channels.map(chnl =>
                  <li key={chnl.title} onClick={() => setChosenChnl(chnl.title)}
                    className={`flex ml-2 py-[7px] px-2 rounded
                      h4 text-base leading-5 cursor-pointer ${
                        chosenChnl === chnl.title ?
                          'h4-chosen bg-gray-500 bg-opacity-[0.45] dark:bg-gray-600 dark:bg-opacity-[0.55]'
                        : `h4-hover hover:bg-gray-500 hover:bg-opacity-30
                          active:bg-gray-500 active:bg-opacity-40
                          hover:dark:bg-gray-600 hover:dark:bg-opacity-[0.25]
                          active:dark:bg-gray-600 active:dark:bg-opacity-40`}`}>
                    <div className='mr-[6px] icon-parent w-5 h-5 text-gray-600 dark:text-gray-500'>
                      {chnl.type === 'text' ? <HiHashtag /> : <HiSpeakerWave />}
                    </div>
                    <h4>{chnl.title}</h4>
                  </li>
                )}
              </ul>
            </li>
          )}
        </ul>
      </nav>

    </div>
  )
}

export default ChannelsSidebar