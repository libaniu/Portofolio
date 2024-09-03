import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import php from '../assets/php.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div className='border border-gray-600 rounded-3xl bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-7
                    place-items-center md:flex md:justify-between md:items-center '>

        <h2 className='primary-color text-xl md:text-4xl font-bold m-4'>
            My <br/> Skills
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]'>
            <img src={html} alt='html'/>
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]'>
            <img src={css} alt='css'/>
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]'>
            <img src={javascript} alt='javascript'/>
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 pt-6 sm:my-0 w-[80px] md:w[100px]'>
            <img src={php} alt='php'/>
            <p className='pt-6'>PHP</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]'>
            <img src={react} alt='react'/>
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w[100px]'>
            <img src={tailwind} alt='react'/>
            <p className='mt-2'>Tailwind</p>
        </div>

    </div>
  )
}

export default Skills
