'use client'


/* components and icon */
import { IconButton } from '@/components/button'
import { DividerX } from '@/components/divider'

import {
  FaArrowRight,
  FaSistrix,
  FaRegSun,
} from "react-icons/fa6"

/* useful stuff */
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function LicodeNavbar() {
  const list_link = [
    {id: 1, title: "Problemset", href: "/problemset"},
    {id: 2, title: "Contest", href: "/contests"},
    {id: 3, title: "About", href: "/about"},
  ];
  const cur_pathname = usePathname();

  return (
<div>

<nav className="bg-white border-gray-200">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="self-center text-2xl font-mono whitespace-nowrap hover:underline-offset-4 hover:underline">licode.net</div>
        </Link>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3 inline-flex items-center">
              <FaSistrix />
            </div>
            <input className="ps-10 block outline-none w-96 text-sm px-4 py-2 bg-slate-100 rounded-xl hover:bg-slate-200" placeholder="Search something"/>
          </div>

          <DividerX height={8} color="gray-300" />

          <div className="flex space-x-1.5">
            <Link href="/register">
              <IconButton className="text-white bg-[#0066ff] hover:bg-blue-700 text-sm rounded-xl hover:scale-110 hover:shadow-xl transition duration-300">
                Register
                <FaArrowRight className="ml-2" />
              </IconButton>
            </Link>
            <Link href="/login">
              <IconButton className="bg-[#0066ff] hover:bg-blue-700 text-sm text-white rounded-xl hover:scale-110 hover:shadow-xl transition duration-300">
                Login
                <FaArrowRight className="ml-2" />
              </IconButton>
            </Link>
          </div>
        </div>
    </div>
</nav>
<nav className="bg-gray-100">
    <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-1 rtl:space-x-reverse text-sm">
                {
                  list_link.map( l => (
                    <li key={l.id}>
                      <Link href={l.href} className={clsx(
                        "block px-5 py-2 text-gray-900 hover:underline hover:underline-offset-2 hover:scale-110 rounded-xl transition duration-300 hover:bg-[#0066ff] hover:shadow-lg hover:text-white",
                        {
                          "text-white bg-[#0066ff] underline underline-offset-2" : cur_pathname.includes(l.href),
                          "text-black" : !cur_pathname.includes(l.href),
                        },
                      )}>{l.title}</Link>
                    </li>
                  ))
                }
            </ul>
        </div>
    </div>
</nav>

</div>
  )
}
