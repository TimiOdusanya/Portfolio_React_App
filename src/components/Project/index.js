import React from "react"
import "./index.scss"
import '../Project'
import "../../data/portfolio.json"
import Portfolio from "../Portfolio"

export default function Project(props){
    // console.log(props.newData.title)
    return (
      <div className="images-container">
        <div className="image-box">
          <img
            src={props.newData.img}
            className="portfolio-image"
            alt="portfolio"
          />
          <div className="content">
            <p className="title">{props.newData.title}</p>
            <h4 className="description">{props.newData.description}</h4>
            <button 
            className="btn"
            onClick={() => window.open(props.newData.url)}
            >View </button>
          </div>
        </div>
      </div>
    )
}