import React from 'react'
import { BiSolidArrowToBottom } from "react-icons/bi";

interface ButtonProps {
    onClick: () => void,
    children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
    onClick,
    children
}) => {
  return (
    <button
    onClick={onClick}
    className='
    h-14 
    w-14
    bg-emerald-500 
    rounded-full 
    hover:bg-emerald-900
    hover:scale-110
    font-bold
    transition
    '
    >
      {children}
    </button>
  )
}

export default Button

// import React from 'react'
// import { BiSolidArrowToBottom } from "react-icons/bi";

// interface ButtonProps {
//     onClick: () => void,
//     children: React.ReactNode
// }

// const Button: React.FC<ButtonProps> = ({
//     onClick,
//     children
// }) => {
//   return (
//     <button
//     onClick={onClick}
//     className='
//     group
//     flex
//     flex-col
//     justify-center
//     items-center
//     rounded-xl
//     px-6
//     py-1
//     text-lg
//     ring-1
//     ring-white
//     font-semibold
//     focus:scale-110
//     hover:scale-110
//     bg-emerald-600 
//     hover:bg-emerald-900
//     transition
//     '
//     >
//         {children}
//         <BiSolidArrowToBottom className="group-hover:translate-y-1 transition"/>
//     </button>
//   )
// }

// export default Button