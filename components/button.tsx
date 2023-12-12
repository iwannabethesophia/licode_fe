'use client'

/* components and icon import */
import { Tooltip } from 'flowbite-react'

/* useful stuff */
import { twMerge } from 'tailwind-merge'

function TooltipButton({
  buttonClassName="",
  tooltipContent="",
  tooltipClassName="",
  tooltipTrigger="click",
  tooltipPlacement="top",
  tooltipArrow=false,
  tooltipAnimation="duration-300",
  children
}) {
  return (
    <Tooltip content={tooltipContent} trigger={tooltipTrigger} placement={tooltipPlacement} arrow={tooltipArrow} className={tooltipClassName} animation={tooltipAnimation}>
      <button className={twMerge('flex items-center py-2 px-4 rounded-2xl', buttonClassName)}>
        {children}
      </button>
    </Tooltip>
  )
}

function IconButton({ children, className="", ...attribute}) {
  return (
    <button className={twMerge('flex items-center py-2 px-4 rounded-2xl', className)} {...attribute}>
      {children}
    </button>
  )
}

export {IconButton, TooltipButton};
