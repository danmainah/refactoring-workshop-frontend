import React from "react"
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
  return (
    <footer className="boxItems">
      <div className="container flex">
        <p>Microverse Webshop</p>
        <div className="social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsFacebook className="icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <RiInstagramFill className="icon" />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillTwitterCircle className="icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin className="icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}
