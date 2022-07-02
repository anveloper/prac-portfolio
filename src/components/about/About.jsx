import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
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
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Exprience</h5>
              <small>Noob</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>none</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>1</small>
            </article>
          </div>
          <p>
            자기소개 글이 들어가는 부분 자기소개 글이 들어가는 부분 자기소개 글이 들어가는 부분 자기소개 글이 들어가는 부분 자기소개 글이 들어가는 부분
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About