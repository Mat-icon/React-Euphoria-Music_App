import React from 'react'
import './app.css'
import { MdCopyright } from 'react-icons/md'
import { SocialIcon } from 'react-social-icons'

function Footer({darkMode}) {
  return (
    <div className={darkMode ?  'footer-body-dark' :  'footer-body'}>
    <div className='footer-container'>
      <div className={darkMode ? 'footer-title-dark' :'footer-title'}>
          <h2>Euphoria</h2>
        </div>
      <div className='footer-flex'>
      <div className={darkMode ? 'footer-links-dark' : 'footer-links'}>
        <label className={darkMode ? 'label-dark' : 'label'}>What we do</label>
        <li><a href='2'>Discover</a></li>
        <li><a href='2'>Developer Mode</a></li>
        <li><a href='2'>Artist</a></li>
      </div>
      <div className={darkMode ? 'footer-links-dark' : 'footer-links'}>
      <label className={darkMode ? 'label-dark' : 'label'}>What we do</label>
        <li><a href='2'>Albums</a></li>
        <li><a href='2'>Recent Release</a></li>
        <li><a href='2'>License</a></li>
      </div>

      <div className={darkMode ? 'footer-links-dark' : 'footer-links'}>
      <label className={darkMode ? 'label-dark' : 'label'}>Help Center</label>
        <li><a href='2'>Contact Us</a></li>
        <li><a href='2'>Help Centers</a></li>
        <li><a href='2'>Corona Virus</a></li>
      </div>
      </div>
      
   
    </div>
    <hr className='line'/>
      <div className={darkMode ? 'copyright-dark' : 'copyright'}>
      <p>2023 <MdCopyright size={15}/>EuphoriaLLc</p>
      <p>Terms Of Services</p>
      <div className='icons'>
        <SocialIcon url="https://twitter.com/jaketrent" bgColor={darkMode ? 'white' : 'black'} className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
        <SocialIcon url="https://youtube.com/jaketrent" bgColor={darkMode ? 'white' : 'black'} className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
        <SocialIcon url="https://instagram.com/jaketrent" bgColor={darkMode ? 'white' : 'black'}className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
        <SocialIcon url="https://facebook.com/jaketrent" bgColor={darkMode ? 'white' : 'black'} className='social-icons' style={{ width: "30px", height: "30px", borderRadius: "50%" }}/>
      </div>
     </div>
     </div>
  )
}

export default Footer