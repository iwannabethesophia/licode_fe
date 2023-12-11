'use client';

import { Footer } from 'flowbite-react';

import Link from 'next/link';

export default function LicodeFooter() {
  return (
    <Footer container className="border-t-2 border-gray-100 rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="text-normal font-mono text-2xl hover:underline hover:underline-offset-4"><Link href="/">licode.net</Link></div>
          <Footer.LinkGroup className="space-x-2">
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm px-4 py-2 rounded-xl hover:bg-[#0066ff] hover:text-white hover:scale-110 hover:shadow-xl transition duration-300">About</Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm px-4 py-2 rounded-xl hover:bg-[#0066ff] hover:text-white hover:scale-110 hover:shadow-xl transition duration-300">Terms & Conditions</Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm px-4 py-2 rounded-xl hover:bg-[#0066ff] hover:text-white hover:scale-110 hover:shadow-xl transition duration-300">Licensing</Link>
            <Link href="#" className="hover:underline hover:underline-offset-4 text-sm px-4 py-2 rounded-xl hover:bg-[#0066ff] hover:text-white hover:scale-110 hover:shadow-xl transition duration-300">Contact</Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="licode.net™" year={2023} />
      </div>
    </Footer>
  );
}
