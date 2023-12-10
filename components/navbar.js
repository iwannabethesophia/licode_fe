'use client'

import Link from 'next/link'

import { IconButton } from '@/components/button'

import {
  FaArrowRight,
} from "react-icons/fa6"
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
          <Link href="/register">
            <IconButton className="bg-white text-[#0066ff] border-2 border-[#0066ff] hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] transition duration-300 text-sm rounded-xl">
              Register
              <FaArrowRight className="ml-2" />
            </IconButton>
          </Link>
          <Link href="/login">
            <IconButton className="bg-[#0066ff] border-2 border-[#0066ff] hover:border-blue-700 hover:bg-blue-700 text-sm text-white rounded-xl">
              Login
              <FaArrowRight className="ml-2" />
            </IconButton>
          </Link>
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
