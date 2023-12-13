'use client'

import { twMerge } from "tailwind-merge";

function SelectorOption({ value="", text="" }) {
  return (
    <option value={value}>{text}</option>
  )
}

function Selector({ children, className="", ...attribute }) {
  /* children for option */
  return (
    <select className={twMerge("outline-none border-none bg-slate-100 rounded-xl hover:bg-slate-200 py-1 px-3", className)} {...attribute}>
      {children}
    </select>
  )
}

export { Selector, SelectorOption };
