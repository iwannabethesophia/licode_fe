'use client';

/* components and icon import */
import { IconButton, TooltipButton } from '@/components/button'
import {
  FaCheck,
  FaCircleCheck,
  FaCircleXmark,
  FaArrowRightToBracket
} from 'react-icons/fa6'

/* useful stuff using on this page */
import Link from 'next/link'
import { useState, useRef } from 'react'
import clsx from 'clsx';

export default function RegisterPage() {
  /* username validation handling in frontend */
  const [valUsername, setValUsername] = useState("");
  const [valEmail, setValEmail] = useState("");
  const [valPassword, setValPassword] = useState("");
  const [valRePassword, setValRePassword] = useState("");

  /* function for username vallidation when user input */
  function validationUsername() {
    var N = valUsername.length;
    const re_validation = /[a-zA-Z_][a-zA-Z0-9_]*/;
    return [!valUsername.includes(' ') && N > 0, (N >= 4 && N <= 20), re_validation.test(valUsername)];
  }
  const username_validation_condition = validationUsername();
  const email_validation_condition = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valEmail);
  const password_validation_condition = (valPassword.length >= 8);
  const repassword_validation_condition = (valRePassword === valPassword && valRePassword.length > 0);
  var overrall_validation = true;
  for (var i = 0; i < 3; ++i) {
    overrall_validation = overrall_validation && username_validation_condition[i];
  }
  overrall_validation = overrall_validation && password_validation_condition && repassword_validation_condition && email_validation_condition;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-8 flex items-center flex-col">
        <h1 className="text-3xl font-mono">licode.net</h1>
        <h1 className="text-3xl font-mono">start your coding travel.</h1>
      </div>
      <div className="p-6 space-y-4 shadow-xl rounded-lg bg-white w-4/12 border border-gray-100">
        <h1 className="text-2xl font-sans font-bold leading-tight tracking-tight text-center">Register your account</h1>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-800">Username</label>
            <input type="username" name="username" value={valUsername} onChange={event => setValUsername(event.target.value)} id="username" className="bg-slate-100 w-full px-4 py-2 rounded-xl mt-2 focus:ring-2 focus:ring-offset-1 focus:ring-[#0066ff] outline-none border-none font-mono" placeholder="your_username_here"  required/>
            <div className="mt-3 font-[sfprorounded-light] text-sm">
              {
                /* condition for username include space inside */
                username_validation_condition[0] ?
                <p className="flex items-center text-green-500"><FaCircleCheck className="mr-2" /> Username cannot contain spaces.</p>:
                <p className="flex items-center text-red-500"><FaCircleXmark className="mr-2" /> Username cannot contain spaces.</p>
              }
              {
                /* condition for username length between 4 to 20 */
                username_validation_condition[1] ?
                <p className="flex items-center text-green-500"><FaCircleCheck className="mr-2" /> Username length must be from 4 to 20 characters.</p>:
                <p className="flex items-center text-red-500"><FaCircleXmark className="mr-2" /> Username length must be from 4 to 20 characters.</p>
              }
              {
                /* condition for username include special characters inside */
                username_validation_condition[2] ?
                <p className="flex items-center text-green-500"><FaCircleCheck className="mr-2" /> Username cannot contain special characters except _.</p>:
                <p className="flex items-center text-red-500"><FaCircleXmark className="mr-2" /> Username cannot contain special characters except _.</p>
              }
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-800">Email (for password reset and annoucement only)</label>
            <input type="email" name="email" value={valEmail} onChange={event => setValEmail(event.target.value)} className="bg-slate-100 w-full px-4 py-2 rounded-xl mt-2 focus:ring-2 focus:ring-offset-1 focus:ring-[#0066ff] outline-none border-none font-mono" placeholder="your_email@gmail.com" required />
            <div className="mt-3 font-[sfprorounded-light] text-sm">
            {
              /* condition for username include special characters inside */
              email_validation_condition ?
              <p className="flex items-center text-green-500"><FaCircleCheck className="mr-2" /> Correct email format.</p>:
              <p className="flex items-center text-red-500"><FaCircleXmark className="mr-2" /> Invalid email format.</p>
            }
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-800">Password</label>
            <input type="password" name="password" id="password" value={valPassword} onChange={event => setValPassword(event.target.value)} className="bg-slate-100 w-full px-4 py-2 rounded-xl mt-2 focus:ring-2 focus:ring-offset-1 focus:ring-[#0066ff] outline-none border-none font-mono" placeholder="your_password_here" required />
            <div className="mt-3 font-[sfprorounded-light] text-sm">
              {
                password_validation_condition ? 
                <p className="flex items-center text-green-500"><FaCircleCheck className="mr-2" /> Password length must be greater than 8 characters.</p> :
                <p className="flex items-center text-red-500"><FaCircleXmark className="mr-2" /> Password length must be greater than 8 characters.</p>
              }
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-800">Retype password</label>
            <input type="password" name="retype-password" id="retype-password" value={valRePassword} onChange={event => setValRePassword(event.target.value)} className="bg-slate-100 w-full px-4 py-2 rounded-xl mt-2 focus:ring-2 focus:ring-offset-1 focus:ring-[#0066ff] outline-none border-none font-mono" placeholder="your_password_here" required />
            <div className="mt-3 font-[sfprorounded-light] text-sm">
              {
                repassword_validation_condition ? 
                <p className="flex items-center text-green-500"><FaCircleCheck className="mr-2" /> Password matched.</p> :
                <p className="flex items-center text-red-500"><FaCircleXmark className="mr-2" /> Password doesn't match.</p>
              }
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
            <div className="flex items-center">
              <div className="text-xs text-gray-400">By registering, you agree to our <Link className="text-blue-600 underline-offset-2 underline" href="#terms_and_condition">Terms & Conditions</Link> of service.</div>
            </div>
            <div className="flex items-end"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start"></div>
            <div className="flex flex-col items-center">
              <div>
                {
                  (overrall_validation) ?
                  <IconButton className="bg-[#0066ff] px-4 py-2 text-white rounded-xl hover:bg-blue-700">
                    Register
                    <FaArrowRightToBracket className="ml-2" />
                  </IconButton>
                  :
                  <TooltipButton id="register-button" tooltipPlacement="bottom" tooltipContent="Please fill in all the information above correctly." tooltipClassName="bg-red-500 opacity-90" buttonClassName="bg-[#0066ff] px-4 py-2 text-white rounded-xl hover:bg-blue-700 focus:bg-red-500 transition duration-150 focus:animate-shake focus:animate-twice focus:animate-duration-150 focus:animate-ease-in-out">
                    Register
                    <FaArrowRightToBracket className="ml-2" />
                  </TooltipButton>
                }
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-700">Already have an account? <Link href="/login" className="text-blue-600">Login !</Link></p>
              </div>
            </div>
            <div className="flex items-end"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
