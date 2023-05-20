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
            Ambitious software developer looking for role in established company
            with opportunity to work with latest technologies on challenging and
            diverse projects. Striving every day to increase knowledge of the
            development world through building projects and keeping track of
            newest methodologies.
          </p>
          <p>
            Interest in advanced techniques: Typescript with Zod, tRPC, strict
            linting rules to ensure type safety from front to back-end.
            Experience in deploying to multiple platforms, and utilizing various
            databases. PostgreSQL (Supabase, Prisma ORM for schema), and NoSQL
            (Firebase & MongoDB).
          </p>
          <p>
            CSS technologies and experience include use of CSS modules, SCSS
            SASS, styled components, as well as tailwind, DaisyUI, &
            BootstrapUI. I have vast experience in React methodologies including
            hooks, contextAPI, fetchAPI, global state management (redux), and
            memoization. I have utilized NextJS versions 13 and earlier. {''}
            <a
              href="https://github.com/DavidKielty1?tab=repositories"
              className="github"
            >
              https://github.com/DavidKielty1?tab=repositories
            </a>{' '}
            to find out more.
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
