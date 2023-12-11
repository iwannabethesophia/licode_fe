'use client'

import { twMerge } from "tailwind-merge"

function DividerX({height=6, className="", color=""}) {
  return (
    <div className={twMerge("h-6 border-[1px] bg-black border-gray-300 rounded-t-xl rounded-b-xl", `h-${height} border-${color}`, className)}>
    </div>
  )
}

export { DividerX };
