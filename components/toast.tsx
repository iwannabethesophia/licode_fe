'use client'

/* useful stuff */
import {twMerge} from "tailwind-merge"

/* import flowbite toast for inheritance */
import { Toast } from "flowbite-react"

/* import icon for signal toast icon */
import {
  FaCircleInfo,
  FaCircleCheck,
  FaCircleXmark
} from "react-icons/fa6"

function NotiToast({signal="info", children, ...attribute}) {
  const signalStyle: any = {
    info: "text-white bg-[#0066ff]",
    error: "text-white bg-red-500",
    success: "text-white bg-green-400",
  };
  const signalIcon: any = {
    info: <FaCircleInfo />,
    error: <FaCircleXmark />,
    success: <FaCircleCheck />,
  };
  const toggleSignalStyle: any = {
    info: "text-white bg-[#0066ff] hover:bg-blue-500 hover:text-white",
    error: "text-white hover:bg-red-400 hover:text-white bg-red-500",
    success: "text-white hover:bg-green-300 hover:text-white bg-green-400",
  };
  return (
    /* hidden is default for toast for toggle only */
    <Toast {...attribute} className={twMerge("hidden fixed w-full shadow-lg rounded-xl ml-10 right-10 bottom-10", signalStyle[signal])}>
      <div className="ml-1 mr-3">
        {signalIcon[signal]}
      </div>
      <div className="text-sm font-normal">{children}</div>
      <Toast.Toggle className={twMerge("focus:ring-[none]", toggleSignalStyle[signal])} />
    </Toast>
  )
}

export { NotiToast };
