'use client';

import { IconButton } from '@/components/button'
import {
  FaCheck,
  FaArrowRightToBracket
} from 'react-icons/fa6'

import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8 flex items-center flex-col">
        <h1 className="text-3xl font-mono">licode.net</h1>
        <h1 className="flex text-3xl font-mono">dev for the future.</h1>
      </div>
      <div className="p-6 space-y-4 shadow-xl rounded-lg bg-white w-4/12 border border-gray-100">
        <h1 className="text-2xl font-sans font-bold text-center leading-tight tracking-tight">Log in to your account</h1>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-800">Username</label>
            <input type="username" name="username" id="username" className="bg-slate-100 w-full px-4 py-2 rounded-xl mt-2 outline-none border-none font-mono focus:ring-2 focus:ring-offset-1 focus:ring-[#0066ff]" placeholder="your_username_here" />
          </div>
          <div>
            <label className="text-sm text-gray-800">Password</label>
            <input type="password" name="password" id="password" className="bg-slate-100 w-full px-4 py-2 rounded-xl mt-2 outline-none border-none font-mono focus:ring-2 focus:ring-offset-1 focus:ring-[#0066ff]" placeholder="your_password_here" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
            <div className="flex items-end">
              <a href="#forgotpassword" className="text-sm font-[sfprorounded-medium] text-blue-600">Forgot your password?</a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
            <div className="flex flex-col items-center">
              <div>
                <IconButton className="bg-[#0066ff] px-4 py-2 text-white rounded-xl hover:bg-blue-700">
                  Login
                  <FaArrowRightToBracket className="ml-2" />
                </IconButton>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-700">Don't have an account? <Link href="/register" className="text-blue-600">Register now!</Link></p>
              </div>
            </div>
            <div className="flex items-end"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
