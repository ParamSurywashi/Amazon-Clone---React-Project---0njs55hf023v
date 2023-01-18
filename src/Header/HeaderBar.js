import React, { useState } from 'react';
import amzLogo from '../images/amazon-logo.png';
import '../styles/header.css';
import { FaSearch } from 'react-icons/fa';
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function HeaderBar() {
const [searchInput, setSearchInput] = useState("");
const productNUmber = useSelector((state)=>state.bucket);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  
  return (
    <>
    <nav className='navBar'>
     <Link id='firstLogo' to="/"> <img className='imageLogo' src={amzLogo} /> </Link>
     <div id='searchBox'> 
        <input type="text" value={searchInput} onChange={(e)=>handleChange(e)} className='searchBar'/>
        <button className='searchBtn'> <FaSearch /></button>
     </div>
     <Link to="/signIn" className='linkHead'> <span id='helloTxt'>Hello Guest<br/></span> Sign In</Link>
     <Link to="/order" className='linkHead'> <span id='helloTxt'>Returns<br/></span>& Orders</Link>
     <Link to="/yourPrime" className='linkHead'> <span id='helloTxt'>Your<br/></span>Primes</Link>
     <Link to="/bucket" id='linkOrderIcon'> <MdShoppingBasket/> <span id='orderCount'>{productNUmber.length}</span></Link>
    </nav>
    </>
  )
}

export default HeaderBar