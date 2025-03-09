import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} width={320} height={400} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Full Stack Developer, Videographer, Video editor, Graphic designer & Social media manager</p>
                        <p>My goal is to provide user-friendly websites with modern touches giving its own personality.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Full Stack</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Graphic design</p><hr style={{ width: "58%" }} /></div>
                        <div className="about-skill"><p>Video editing</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>Photography</p><hr style={{ width: "63%" }} /></div>

                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>6+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Trusted clients</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>24hr</h1>
                    <p>Support</p>
                </div>

            </div>
        </div>
    )
}

export default About