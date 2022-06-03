import {
  faGithub,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './about.scss'
import { Loader } from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Ambitious front-end developer looking for a role in an established
            IT company with the opportunity to work with the latest technologies
            on challenging and diverse projects.
          </p>
          <p>
            Avid learner, working every day to increase my knowledge of the
            development world, whether it be through the process of creating and
            building projects, direct learning, keeping tabs on discussions
            regarding new strageties and methodologies, or through discussions
            with my mentor.
          </p>
          <p>
            By the looks of the projects I have decided to pursue, I can only
            guess that I was hungry when the decisions were made. Chinese and
            spicy food are my personal favourites.
          </p>
        </div>
        <div className="stage-cube-content">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithub} color="black" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4B28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
