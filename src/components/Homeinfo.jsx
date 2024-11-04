import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({text, link, btnText}) => (
    <div>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
          {btnText}
          <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>

    </div>
)



const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Shine</span> 👋🏻
            <br/>
            A Computer Engineer Student
        </h1>
    ),
    2: (
        <InfoBox 
         tex="Eager to learn skills everyday!"
         link="/about"
         btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
         tex="See my projects!"
         link="/projects"
         btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
         tex="Need a project done?"
         link="/contact"
         btnText="Learn talk"
        />
    ),
}


const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default Homeinfo
