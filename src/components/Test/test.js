import { useState } from 'react'
import './test.scss'
import Arrow from '../../assets/images/arrow.png'
import NewYear from '../../assets/images/newyear.png'
import Chinese from '../../assets/images/chinese.png'
import Yelp from '../../assets/images/yelp.png'

export default function Test() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: '1',
      icon: NewYear,
      title: 'Authentic Chinese Food Finder',
      desc: 'MERN stack application with CRUD functionality. Users are able to submit local Chinese restaurants with information regarding location, price, as well as give reviews and ratings for the various restaurants.',
      img: Chinese,
    },
    {
      id: '2',
      icon: Arrow,
      title: 'Mobile',
      desc: '2Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: Arrow,
    },
    {
      id: '3',
      icon: Yelp,
      title: 'Branding',
      desc: 'Camping',
      img: Yelp,
    },
  ]

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }
  return (
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
                  <a
                    href="https://limitless-refuge-85260.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
                    <img src={data[0].icon} alt="" />
                  </div>
                  <h2>{data[0].title}</h2>
                  <p>{data[0].desc}</p>
                  <a
                    href="https://limitless-refuge-85260.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
        className="slider-three"
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
                  <a
                    href="https://limitless-refuge-85260.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
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
    </div>
  )
}
