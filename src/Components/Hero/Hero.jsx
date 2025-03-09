import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} width={400} height={400} alt="" />
        <h1><span>Im Midhun Mohan,</span> Full Stack Devoleper</h1>
        <p>Welcome to my Porfolio, if you want to contact me or want to check my resume, just click the buttons below, Want to know more about me? Just scroll down😉</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a className="hero-resume" href='https://drive.google.com/file/d/1qYm716zhd-6dLzKDejQPemawW6MS59Of/view?usp=sharing'>My resume</a>
        </div>
    </div>
  )
}

export default Hero