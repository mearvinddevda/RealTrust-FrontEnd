import React from 'react'
import { Button } from './ui/button'

const AboutUs = () => {
  return (
    <div className='text-center my-10'>
      <div className="heading text-center">
					<h1 className=" text-lg font-bold text-sky-400">About Us</h1>
					<img src="" alt="" />
				</div>
        <div className="para w-3/6 m-auto ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus autem. Ad consectetur qui magnam, deleniti ex perferendis quasi libero nesciunt ipsam! Repudiandae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure repudiandae temporibus nisi vel nemo cum fugit unde, voluptatibus libero eveniet minus? Neque placeat pariatur exercitationem iste sed soluta debitis facilis nam fugit magni!</p>
        </div>
        <Button className="bg-white text-blue-700 h-10 w-fit mt-5 border-b-4 border-b-blue-700">Learn More</Button>
    </div>
  )
}

export default AboutUs
