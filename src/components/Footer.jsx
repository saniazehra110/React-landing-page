import React from 'react'
import "./css/Footer.css"

const Footer = () => {
  return (
       <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>Nafasat Fashion</h2>
          <p>
            Pre-loved fashion, thoughtfully selected for you.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#collections">Collections</a>
          <a href="#condition">Condition Guide</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>WhatsApp</p>
          <p>Phone</p>
          <p>Location</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <p>Instagram</p>
          <p>Facebook</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Nafasat Fashion. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer