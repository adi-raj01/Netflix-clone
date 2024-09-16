import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon  from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/Titlecards/TitleCard'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt=""  className='banner-img'/>
          <div className="hero-caption">
            <img src={hero_title} alt=""  className='caption-img'/>
            <p>Discoving his ties to a secret ancient order, a young man living in modern Istanbul embarks on quest to save the city from an immortal enemy</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" /><a href="https://youtu.be/Uk6wo9cE3hE?si=3YxgKjLzHJG5ArTo">Play</a></button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitleCards/>
          </div>
          </div>
          <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"}/>
          <TitleCards title={"Only on Netflix"}/>
          <TitleCards title={"Upcoming"}/>
          <TitleCards title={"Movies for You"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home