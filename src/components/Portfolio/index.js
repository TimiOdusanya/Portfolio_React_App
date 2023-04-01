import React, {useState, useEffect} from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import Project from "../Project";
import Data from "../../data/portfolio.json"

export default function Portfolio(){

      const [letterClass, setLetterClass] = useState("text-animate")
      //const [portfolio, setPortfolio] = useState([])

      useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass("text-animate-hover")
        }, 3000)

        return () => {
          clearTimeout(timer)
        }
      })

    //   useEffect(() => {
    //     getPortfolio()
    //   }, [])

    const newList = Data.portfolio;

    const Port = newList.map((data, id) =>(
      <Project 
       key = {id}
      newData = {data}

      />
    ))
    return (
      <>
        <div className="container portfolio-page">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Portfolio".split("")}
              idx={15}
            />
          </h1>
        </div>
        <div className="images-container">{Port}</div>

        <Loader type="pacman" />
      </>
    )
}