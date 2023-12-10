'use client';

import { Footer } from 'flowbite-react';

import Link from 'next/link';

export default function LicodeFooter() {
  return (
    <Footer container className="border-t-2 border-gray-100 rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div className="text-normal font-mono text-2xl hover:underline hover:underline-offset-4"><Link href="/">licode.net</Link></div>
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Flowbite™" year={2022} />
      </div>
    </Footer>
  );
}
