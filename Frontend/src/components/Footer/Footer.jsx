import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img style={{width:"200px"}}  src={assets.cravi} alt="" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, sed! Quasi, vitae, rerum, doloribus hic in doloremque officia consequuntur quod autem nobis sequi ullam consequatur ducimus unde asperiores blanditiis quas.</p>
                <div className="social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+234-708-478-0390</li>
                    <li>contact@Cravings.com </li>
                </ul>

            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; Cravings.com - All Right Reserved. 
        </p>
    </div>
  )
}

export default Footer