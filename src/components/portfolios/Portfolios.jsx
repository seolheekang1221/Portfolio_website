import React from 'react'
import './portfolios.css'
import IMG1 from '../../assets/food.jpg'
import IMG2 from '../../assets/mapty.jpg'
import IMG3 from '../../assets/glasses.jpg'
import IMG4 from '../../assets/momentum.jpg'
import IMG5 from '../../assets/portfolio.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food Order App',
    github: 'https://github.com/seolheekang1221/Food_order_app',
    demo: 'https://famous-gingersnap-88a91f.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Maptify App',
    github: 'https://github.com/seolheekang1221/mapty_app',
    demo: 'https://github.com/seolheekang1221/mapty_app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Glasses Store',
    github: 'https://github.com/seolheekang1221/glasses_store',
    demo: 'https://wondrous-lamington-29512b.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Momentum',
    github: 'https://github.com/seolheekang1221/momentum',
    demo: ' https://seolheekang1221.github.io/momentum/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Seolhee Portfolio',
    github: 'https://github.com/seolheekang1221/Portfolio_website',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
]


const Portfolios = () => {
  return (
    <section id='portfolios'>
      <h5>My Recent Work</h5>
      <h2>Portfolios</h2>

      <div className="container portfolios__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolios__item'>
                <div className="portfolios__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolios