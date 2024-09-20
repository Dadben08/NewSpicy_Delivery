import React, { useEffect } from 'react';
import "./Header.css";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    // Slower fly-in effect for header content
    gsap.from(".header-contents h2", {
      x: "-100vw",  // Fly in from the left
      opacity: 0,
      duration: 2.5,  // Slower animation
      ease: "power3.out"
    });

    gsap.from(".header-contents p", {
      x: "-100vw",  // Fly in from the left
      opacity: 0,
      duration: 2.5,  // Slower animation
      delay: 0.5,  // Slight delay for staggered effect
      ease: "power3.out"
    });

    gsap.from(".header-contents button", {
      x: "100vw",  // Fly in from the right
      opacity: 0,
      duration: 2.5,  // Slower animation
      delay: 1,  // Delayed start for button
      ease: "power3.out"
    });
  }, []);

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable
          array of dishes crafted with the finest ingredients and culinary expertise.
          Our mission is to satisfy your cravings and elevate your dining experience, 
          one delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
