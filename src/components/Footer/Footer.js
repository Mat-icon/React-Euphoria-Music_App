import React from 'react'
import './app.css'
import { MdCopyright } from 'react-icons/md'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <div className= 'footer-body'>
    <div className='footer-container'>
      <div className='footer-title'>
          <h2>Euphoria</h2>
        </div>
      <div className='footer-flex'>
      <div className='footer-links'>
        <label>What we do</label>
        <li><a href='2'>Discover</a></li>
        <li><a href='2'>Developer Mode</a></li>
        <li><a href='2'>Artist</a></li>
      </div>
      <div className='footer-links'>
      <label>What we do</label>
        <li><a href='2'>Albums</a></li>
        <li><a href='2'>Recent Release</a></li>
        <li><a href='2'>License</a></li>
      </div>

      <div className='footer-links'>
      <label>Help Center</label>
        <li><a href='2'>Contact Us</a></li>
        <li><a href='2'>Help Centers</a></li>
        <li><a href='2'>Corona Virus</a></li>
      </div>
      </div>
      
   
    </div>
    <hr className='line'/>
      <div className='copyright'>
      <p>2023<MdCopyright size={15}/>EuphoriaLLc</p>
      <div className='icons'>
        <SocialIcon url="https://twitter.com/jaketrent"  className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
        <SocialIcon url="https://youtube.com/jaketrent"  className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
        <SocialIcon url="https://instagram.com/jaketrent" className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
        <SocialIcon url="https://facebook.com/jaketrent"  className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
      </div>
     </div>
     </div>
  )
}

export default Footer