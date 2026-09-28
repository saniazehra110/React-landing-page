/*import logo from '../assets/Nafasat-logo.png';
import { useState } from "react";
import './css/Navbar.css';

const Navbar = () => {
   return (
     <div>
       <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', background: '#fff'}}>
         <div style={{ display: 'flex', alignItems: 'center' }}>
           <img 
             src={logo} 
             alt="Nafasat Fashion Logo" 
             style={{ height: '75px',width:'100px', objectFit: 'contain'}} 
           />
         </div>
         <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <a href="#home" style={{ textDecoration: 'none', color: '#2B2D42', fontWeight: '500' }}>Home</a>
           <a href="#collections" style={{ textDecoration: 'none', color: '#2B2D42', fontWeight: '500' }}>Pre-loved Collections</a>
           <a href="#guide" style={{ textDecoration: 'none', color: '#2B2D42', fontWeight: '500' }}>Condition Guide</a>
           <a href="#contact" style={{ textDecoration: 'none', color: '#2B2D42', fontWeight: '500' }}>Contact Us</a>

            <input type="text" placeholder='Search thrift items...'
            style={{ 
               padding: '8px 12px', 
               borderRadius: '20px', 
               border: '1px solid #ccc', 
               outline: 'none',
               fontSize: '14px',
               width: '200px'
             }}/>
             </div>
       </nav>
    
     </div>
   );
};

export default Navbar;*/


import logo from '../assets/Nafasat-logo.png';
import './css/Navbar.css';

const Navbar = () => {
   return (
     
       <nav className="navbar" >
         <div className="navbar-logo">
          <img 
  src={logo}
  alt="Nafasat Fashion Logo"
/>
         </div>
         <div  className="nav-links" >
            <a href="#home">Home</a>
           <a href='#Pre-loved Collections'>Pre-loved Collections</a>
           <a href='#Condition Guide'>Condition Guide</a>
           <a href="#contact" >Contact Us</a>

            <input className='input' type="text" placeholder='Search thrift items...'/>
             </div>
       </nav>
    
    
   );
};

export default Navbar;
