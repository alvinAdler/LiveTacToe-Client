import { FC } from 'react'
import { FaCheck, FaTimes, FaInfo, FaExclamation } from 'react-icons/fa'

export type COLORS = "WARNING" | "SUCCESS" | "ERROR" | "INFO"

export interface ModalIconProps{
  iconType: COLORS
}

const renderBorder = (color: COLORS) => {
  switch(color){
    case "WARNING":
      return "border-[#ebdf34]"
    case "SUCCESS":
      return "border-[#34eb4c]"
    case "ERROR":
      return "border-[#EB4034]"
    case "INFO":
      return "border-[#2285E4]"
  }
}

const ModalIcon: FC<ModalIconProps> = ({ iconType }) => {

  const renderIcons = () => {
    switch(iconType){
      case "WARNING":
        return <FaExclamation className={`text-[#ebdf34] w-full h-auto`}/>
      case "SUCCESS":
        return <FaCheck className={`text-[#34eb4c] w-full h-auto`}/>
      case "ERROR":
        return <FaTimes className={`text-[#eb4034] w-full h-auto`}/>
      case "INFO":
        return <FaInfo className={`text-[#2285e4] w-full h-auto`}/>
    }
  }

  return (
    <div className={`rounded-full w-16 border-solid ${renderBorder(iconType)} border-[3px] p-3`}>
      {renderIcons()}
    </div>
  )
}

export default ModalIcon