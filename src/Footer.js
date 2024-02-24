import React from 'react'
import "./Footer.css";

function Footer() {
  return (
    <footer>
    <div class="footer-container">
      <div class="footer-section">
        <h4>Connect with Me</h4>
        <ul>
          <li className='footer__facebook'><a href="https://www.facebook.com/abhishek.singhrajput.7399786"
              target="_blank">Facebook</a></li>
          <li className='footer__instagram'><a href="https://www.instagram.com/abhisingh03_/"
              target="_blank">Instagram</a></li>
          <li className='footer__linkedin'><a href="https://www.linkedin.com/in/abhishek-singh0325/"
              target="_blank">Linkedin</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>About Amazon</h4>
        <ul>
          <li><a href="#">Company Information</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Amazon Devices</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Amazon Payment Products</h4>
        <ul>
          <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
          <li><a href="#">Amazon.com Store Card</a></li>
          <li><a href="#">Amazon Business Card</a></li>
          <li><a href="#">Amazon Business Line of Credit</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Let Us Help You</h4>
        <ul>
          <li><a href="#">Your Account</a></li>
          <li><a href="#">Shipping Rates &amp; Policies</a></li>
          <li><a href="#">Amazon Prime</a></li>
          <li><a href="#">Returns &amp; Replacements</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
    <p>Conditions of Use & Sale Privacy Notice Abhishek-Singh <br />© 2023, Amazon Clone,or its affiliates. All Rights Reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
