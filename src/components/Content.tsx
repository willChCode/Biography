import React from 'react';
import { ImFacebook, ImTwitter, ImLinkedin2 } from 'react-icons/im';
import { SiOpenai } from 'react-icons/si';
import Profile from './Profile';

export default function Content() {
  return (
    <div className='container m-auto flex flex-col justify-center items-center gap-4 py-[4rem]'>
      <SiOpenai className='text-6xl' />
      <h1 className='font-bold text-3xl'>Elizabeth Fischer</h1>
      <p className='italic text-lg'>creative, strategist, storyteller</p>

      <ul className='menu menu-horizontal text-2xl bg-[#270C04] text-white'>
        <li>
          <a href='/'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='/'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='/'>
            <ImLinkedin2 />
          </a>
        </li>
      </ul>
      <Profile />
    </div>
  );
}
