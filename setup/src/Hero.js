import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'
const Hero = () => {
  const {closeSubmenu} = useGlobalContext()
  return(
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui porro, quo minus et eligendi maxime a dolores accusamus. Ipsam, dolorem?</p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt="phone" />
        </article>
      </div>
    </section>
    ) 
    
}

export default Hero
