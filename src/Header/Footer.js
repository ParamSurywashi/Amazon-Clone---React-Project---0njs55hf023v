import React from 'react';
import '../styles/footer.css';
import amzLogo from '../images/amazon-logo.png';

import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footerBase'>
        <div className='websiteFooter' >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <Link to="/">Amazon.in</Link>
      </div>
    </div>
  )
}

export default Footer