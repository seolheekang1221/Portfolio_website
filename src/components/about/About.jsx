import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import { FaAward } from 'react-icons/fa'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Education</h5>
                            <small>
                                <h5>Seneca College</h5>
                                <h4>Diploma Computer Programmer (2021)</h4>
                            </small>
                        </article>
                    </div>

                    <p>
                        <h2>
                            I am new graduated Junior Full Stack Developer with rising programming skills. I have leaned multiple languages and
                            I am continuously educating me with various languages to improve my skills and knowledge. My meticulous personality
                            is one of my strength on computer programming, it helps me to analyze clearly and take care of details. I have a very
                            lovely personality which makes my working environments more bright and warm.
                            Always contact to me!
                        </h2>
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About