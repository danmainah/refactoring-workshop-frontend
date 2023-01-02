import React from "react"
import "./slider.css"

const slides = [
  {
    image: "../images/slide/slide1.png",
  },
  { image: "../images/slide/slide2.png" },
  { image: "../images/slide/slide3.png" },
  { image: "../images/slide/slide4.png" },
]

export const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container grid">
          <div className="box">
            <div className="img">
              <img src={slides[0].image} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={slides[1].image} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={slides[2].image} alt="" />
            </div>
          </div>
          <div className="box">
            <div className="img">
              <img src={slides[3].image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
