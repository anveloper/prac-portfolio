import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
          </ul>
        </article>
        {/* list end */}

        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design X</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
          </ul>
        </article>
        {/* list end */}

        <article className="service">
          <div className="service__head">
            <h3>Simple & Short Video</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>해당되는 기술적인 제공내용</p>
            </li>
          </ul>
        </article>
        {/* list end */}
      </div>
    </section>
  )
}

export default Services