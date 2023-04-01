import "./index.scss"
import LogoTitle from "../../assets/images/logo-t2.png"
import { Link } from "react-router-dom"
import React from "react"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "./Logo"
import Loader from "react-loaders"

export default function Home(){
  const [letterClass, setLetterClass] = React.useState('text-animate')
  //const nameArray = ['T','i','m', 'i']
  const nameArray = 'imi Odusanya'.split('');
  const jobArray = 'Full Stack Developer'.split('');


  React.useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m,</span>
              <img src={LogoTitle} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
            </h1>
            <h2>JavaScript/ MERN Stack(Node, React, Express, Mongoose) / C# (.Net Core)</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          <Logo />
        </div>
        <Loader type="pacman" />
      </>
    )
}