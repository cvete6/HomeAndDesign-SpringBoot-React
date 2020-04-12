import React from 'react'
import './SocialFollows.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faYoutube,
    faInstagram
}from '@fortawesome/free-brands-svg-icons';

export default  ()=> (
    <div className={"socialContainer"}>
        <a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook}size="2x"/> </a>
        <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter}size="2x"/></a>
        <a className={"youtube social"} href="https://www.youtube.com/">
        <FontAwesomeIcon icon={faYoutube}size="2x"/>
        </a>
        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}size="2x"/></a>

    </div>
)