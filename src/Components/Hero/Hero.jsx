import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} width={400} height={400} alt="" />
        <h1><span>I'm Midhun Mohan,</span> Full Stack Developer</h1>
        <p>Welcome to my Porfolio,Here you can check my resume and connect with me via clicking the buttons below, Want to know more about me? Just scroll down!</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a className="hero-resume" href='https://drive.google.com/file/d/1cpFyDXYekHxdvcyWFcQaUNlZi1UZl-Iz/view?usp=sharing'>My resume</a>
        </div>
    </div>
  )
}

export default Hero