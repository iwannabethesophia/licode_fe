'use client'

import { twMerge } from "tailwind-merge"

function DividerX({height=6, className="", color=""}) {
  return (
    <div className={twMerge("h-6 border-[1px] bg-black border-gray-300 rounded-t-xl rounded-b-xl", `h-${height} border-${color}`, className)}>
    </div>
  )
}

function TextDivider({ hrStyle="", textPlacement="center", children, ...attribute }) {
  const placementStyle: any = {
    "left"  : "start-0 pr-4",
    "center": "left-1/2 -translate-x-1/2 px-4",
    "right":  "end-0 pl-4",
  }
  return (
    <div className="inline-flex items-center justify-center w-full relative">
      <hr className={twMerge("w-full h-px my-4 bg-gray-300 border-0", hrStyle)} />
      <div className={twMerge("absolute bg-white", placementStyle[textPlacement])}>{children}</div>
    </div>
  )
}

export { DividerX, TextDivider };
