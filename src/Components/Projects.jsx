import React from 'react'
import imgg  from "../assets/Images/pexels-brett-sayles-2881232.svg"
import { Button } from './ui/button'

const Projects = () => {
  return (
    <div className='bg-blue-700 bg-opacity-10 h-screen'>
        <div className="text-center">
            <h1 className=" text-2xl font-bold text-sky-400 ">Our Projects</h1>
            <p className='w-2/4 text-center m-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum aspernatur, eum nostrum sit architecto quam nemo dolorem quia saepe neque molestiae voluptatem! Doloremque, adipisci?</p>
        </div>
        <div className="pro">
            <div className="cards  max-w-56 min-w-64 max-h-fit bg-white pb-3 rounded-xl grid">
                <img src={imgg} alt="" className='rounded-xl' />
                <h1 className="px-6 text-xl font-bold text-sky-400">Consultation</h1>
                <p className='px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className="flex items-center justify-center my-5">

				<Button className=" bg-orange-600 h-10 w-52 ">Contact</Button>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Projects
