import React from 'react'
import './portfolio.css'
import IMG from '../../assets/any.png'
const data = [
  {
    id: 1,
    image: IMG,
    title: '임시 제목',
    github: 'https://github.com',
    ppt: 'https://docs.google.com'
  },
  {
    id: 2,
    image: IMG,
    title: '임시 제목',
    github: 'https://github.com',
    ppt: 'https://docs.google.com'
  },
  {
    id: 3,
    image: IMG,
    title: '임시 제목',
    github: 'https://github.com',
    ppt: 'https://docs.google.com'
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, ppt }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{ title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={ppt} className="btn btn-primary" target='_blank'>Google PPT</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio