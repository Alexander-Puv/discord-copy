import { useState, useEffect } from 'react';
import { BsFillCameraFill, BsPlus } from 'react-icons/bs';

const UploadPhoto = ({isOpen}: {isOpen: boolean}) => {
  const [image, setImage] = useState<string | null>(null);
  const uploadedImage = 'uploadedImage'

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setImage(null)
        localStorage.removeItem(uploadedImage)
      }, 150)
    }
  }, [isOpen])
  

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      setImage(reader.result as string)
      localStorage.setItem(uploadedImage, reader.result as string)
    };

    reader.readAsDataURL(file)
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    const reader = new FileReader()

    reader.onload = () => {
      setImage(reader.result as string);
      localStorage.setItem(uploadedImage, reader.result as string)
    }

    reader.readAsDataURL(file)
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
  };

  return (
    <label className={`relative w-20 h-20 flex flex-col items-center justify-center
      ${!image ? 'border-2 border-dashed border-gray-600' : ''} rounded-full
      text-secondary cursor-pointer
      dark:border-gray-500`}
      onDrop={handleDrop} onDragOver={handleDragOver}>
      {image ? <img src={image} className='w-full h-full object-cover rounded-full' />
      : <>
        <span className="absolute top-0 right-0 w-6 h-6
          flex items-center justify-center
          bg-brand rounded-full text-white icon-parent"><BsPlus /></span>
        <div className='icon-parent'><BsFillCameraFill /></div>
        <h4 className="h4 font-extrabold tracking-wide">UPLOAD</h4>
      </>}
      <input
        type='file'
        className='hidden'
        accept='image/*'
        onChange={handleFileInput}
      />
    </label>
  )
}

export default UploadPhoto