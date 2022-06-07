import { useState } from 'react'
import './portfolio.scss'
import Arrow from '../../assets/images/arrow.png'
import Panda from '../../assets/images/panda.png'
import Chinese from '../../assets/images/chinese.png'
import Stars from '../../assets/images/stars.png'
import Gusto from '../../assets/images/gusto.webp'
import Girlchef from '../../assets/images/Girlchef.png'
import Chefhat from '../../assets/images/Chefhat.png'
import { Loader } from 'react-loaders'

export default function Test() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: '1',
      icon: Girlchef,
      title: 'Scrumptious',
      desc: 'Use this fantastic app to search for recipes from different recipes with search function, or through taylor-made categories. ',
      tech: 'React, FetchAPI',
      img: Chefhat,
      website: 'https://exquisite-souffle-cb2d07.netlify.app/',
    },
    {
      id: '2',
      icon: Panda,
      title: 'Panda Review',
      desc: 'Users are urged to submit local oriental-themed restaurants with information regarding location, price, and dishes. Users can also give reviews and ratings.',
      img: Chinese,
      tech: 'Javascript, MonogoDB, Express, Node',
      website: 'https://limitless-refuge-85260.herokuapp.com/',
    },
    {
      id: '3',
      icon: Stars,
      title: 'Michelin Star',
      desc: 'We champion the finest seasonal produce, creating a unique and relaxed dining experience. Users can order food and have it delivered to their address.',
      img: Gusto,
      tech: 'React, Firebase',
      website: 'https://salty-citadel-43327.herokuapp.com/',
    },
  ]

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
    <div className="container">
      <div className="works" id="works">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data[0].icon} alt="" />
                  </div>
                  <h2>{data[0].title}</h2>
                  <p>{data[0].desc}</p>
                  <p className="Tech">{data[0].tech}</p>
                  <a href={data[0].website} target="_blank" rel="noreferrer">
                    <input
                      type="button"
                      className="button"
                      value="Open Website"
                    />
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data[0].img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-two"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data[1].icon} alt="" />
                  </div>
                  <h2>{data[1].title}</h2>
                  <p>{data[1].desc}</p>
                  <p className="Tech">{data[1].tech}</p>
                  <a href={data[1].website} target="_blank" rel="noreferrer">
                    <input
                      type="button"
                      className="button"
                      value="Open Website"
                    />
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data[1].img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="slider-three"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data[2].icon} alt="" />
                  </div>
                  <h2>{data[2].title}</h2>
                  <p>{data[2].desc}</p>
                  <p className="Tech">{data[2].tech}</p>
                  <a href={data[2].website} target="_blank" rel="noreferrer">
                    <input
                      type="button"
                      className="button"
                      value="Open Website"
                    />
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data[2].img} alt="" />
              </div>
            </div>
          </div>
        </div>
        <img
          src={Arrow}
          className="arrow left"
          alt="previous work"
          onClick={() => {
            handleClick('left')
          }}
        />
        <img
          src={Arrow}
          className="arrow right"
          alt="next work"
          onClick={() => {
            handleClick('')
          }}
        />
        <Loader type="pacman"></Loader>
      </div>
    </div>
  )
}
