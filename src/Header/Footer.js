import React from 'react';
import '../styles/footer.css';
import amzLogo from '../images/amazon-logo.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';
function Footer() {
  const [footers, setFooters] = useState(false);
    document.addEventListener('scroll', function(e) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 200; 
        if(currentScroll + modifier > documentHeight) {
           setFooters(true);
        }else{
          setFooters(false);
        }
    })

    function backToTopFunc(e){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  return (
    
      (!footers) ? (
    <div className='footerBase'>
     
          <div className='websiteFooter' >
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <Link to="/" className='linkForWebsite'>Amazon.in</Link>
            </div>
        </div>
        ) : (
          <>
          <div onClick={(e)=>backToTopFunc(e)} id="backToTopTxt">Back To Top</div>
      
         
          <div className='footerDivs'>
            <div id='logoLink' ><Link to="/"> <img className='footerLogo' src={amzLogo} /> </Link></div>
            <ul>
              <span>Get to Know us</span>
              <li><a href='https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer'>About us</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Carrer</a></li>
              <li><a href="https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Press Releases</a></li>
            </ul>
            <ul>
              <span>Connect with Us</span>
              <li><a href='https://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&token=2075D5EAC7BB214089728E2183FD391706D41E94&6'>Facebook</a></li>
              <li><a href="https://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&token=A309DFBFCB1E37A808FF531934855DC817F130B6&6">Twitter</a></li>
              <li><a href="https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards">Instagram</a></li>
            </ul>
            <ul>
              <span>Let Us Help You</span>
              <li><a href='https://www.amazon.in/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid'>COVID-19 and Amazon</a></li>
              <li><a href="https://www.amazon.in/gp/browse.html?node=6967393031&ref_=footer_mobapp">Amazon App Download</a></li>
              <li><a href="https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he">Help</a></li>
            </ul>
          </div>
       {/* </div> <div className='footerWithDetails'></div> */}
       </>
        )
      
        
   
  )
}

export default Footer