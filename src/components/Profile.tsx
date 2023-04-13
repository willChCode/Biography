import React from 'react';
import perfil from '../img/profileBianca2.jpg';

export default function Profile() {
  return (
    <div className='profile flex flex-col justify-center items-center mt-8 lg:profile'>
      <figure className='perfil w-48 border-4 border-white'>
        <img src={perfil} alt='#' />
      </figure>
      <p className='paragraph1 text-lg px-[1rem]'>
        <br />
        Hi. I’m Elizabeth. <br />
        <br />I wear a lot of hats. These hats serve a bigger purpose—to equip
        me to be the best storyteller I can be.
      </p>
      <span className='paragraph2 text-lg px-[1rem] flex flex-col gap-4'>
        <p>
          <br />
          Enthralled by my Grandfather’s ability to captivate an audience by his
          stories, I have made it my life’s work to continue his legacy.
        </p>
        <p>
          No two people are alike. No two stories are alike. Let me tell your
          story.{' '}
        </p>
        <button
          className='btn bg-[#662514] hover:bg-orange-950 border-0 text-white text-base mt-6
         '>
          Let's Connect!
        </button>
      </span>
    </div>
  );
}
