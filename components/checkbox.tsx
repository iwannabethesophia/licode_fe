'use client'

import { twMerge } from "tailwind-merge"

function Checkbox({ checkboxStyle="", text="", textStyle="", ...attribute }) {
  return (
    <div className="flex items-center">
      <input type="checkbox" className={twMerge(`
        w-5
        h-5
        border-1
        border-slate-200
        outline-none
        bg-slate-100
        text-[#0066ff]
        rounded-lg
        focus:ring-[none]
        `, checkboxStyle)} />
      <label className={twMerge("text-sm ml-2", textStyle)}>{text}</label>
    </div>
  )
}

export { Checkbox };
