'use client'

/* components and icon import */
import { Tooltip } from 'flowbite-react'

/* useful stuff */
import { twMerge } from 'tailwind-merge'

export function TooltipButton({
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

export function IconButton({ className="", children }) {
  return (
    <button className={twMerge('flex items-center py-2 px-4 rounded-2xl', className)}>
      {children}
    </button>
  )
}
