import { FC, ReactNode } from 'react'

import { COLORS } from '../atoms/ModalIcon'

import ModalIcon from '../atoms/ModalIcon'
import Button, { ButtonInvert } from '../atoms/Button'

interface ModalChildrenComps{
  Default: FC<ModalDefaultContentProps>
}

export interface ModalProps{
  isVisible: boolean,
  children: ReactNode,
  onClose?: () => void,
  closeable?: boolean;
}

const Modal: FC<ModalProps> & ModalChildrenComps = ({ isVisible, children, onClose, closeable=true }) => {
  return (
    <>
    {isVisible &&
      <div className='w-screen h-screen fixed inset-0 bg-black-200 flex justify-center items-center z-50' onClick={() => (onClose && closeable) && onClose()}>
        <div className='bg-primary rounded-lg w-[80%] max-w-[28rem] min-h-[20rem] p-4 flex items-stretch' onClick={(ev) => ev.stopPropagation()}>
          {children}
        </div>
      </div>
    }
    </>
  )
}

interface ModalDefaultContentProps{
  icon: COLORS,
  title: string,
  desc: string,
  buttonConfirmText?: string,
  onConfirm: () => void,
  showButtonCancel?: boolean,
  onCancel?: () => void,
  buttonCancelText?: string 
}

const ModalDefaultContent: FC<ModalDefaultContentProps> = (props) => {

  const { icon, title, desc, buttonConfirmText="Ok", buttonCancelText="Cancel", onConfirm, onCancel, showButtonCancel=false } = props

  return(
    <div className='w-full flex flex-col items-center justify-around text-center p-2 text-sub'>
      <h2 className='text-2xl font-bold textsub-'>{title}</h2>
      <ModalIcon iconType={icon}/>
      <p>{desc}</p>
      <div className='w-full flex flex-wrap justify-center gap-2'>
        <ButtonInvert onClick={onConfirm}>{buttonConfirmText}</ButtonInvert>
        {showButtonCancel &&
          <Button onClick={onCancel}>{buttonCancelText}</Button>
        }
      </div>
    </div>
  )
}

Modal.Default = ModalDefaultContent

export default Modal