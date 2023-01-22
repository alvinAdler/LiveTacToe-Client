import { FC, useRef, SyntheticEvent } from 'react'

import Button from '../../components/atoms/Button'
import TextInput from '../../components/atoms/TextInput';

export interface MenuCardProps{
  title: string;
  submitText: string;
  onSubmit: (inputValue: string) => void;
  messageOnEmpty?: string;
  placeholder?: string;
}

const MenuCard: FC<MenuCardProps> = ({ title, submitText, onSubmit, placeholder="", messageOnEmpty="A field is not supposed to be empty. Please fill them." }) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault()
    if(!inputRef.current?.value || inputRef.current.value === ""){
      alert(messageOnEmpty)
      return
    }
    onSubmit(inputRef.current.value)
  }

  return (
    <form className='grid gap-2 md:auto-cols-auto md:auto-rows-auto items-center md:max-w-[30%]'
    onSubmit={handleSubmit}
    >
      <h2 className='font-bold text-sub md:col-span-2'>{title}</h2>
      <TextInput ref={inputRef} placeholder={placeholder}/>
      <Button>{submitText}</Button>
    </form>
  )
}

export default MenuCard