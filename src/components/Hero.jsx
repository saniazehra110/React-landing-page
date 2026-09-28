import React from 'react'
import logo from '../assets/Nafasat-logo.png';
import bg from '../assets/nafasat-1.jpeg';
import bg2 from '../assets/nafasat-2.png'
import './css/Hero.css'
const Hero = () => {
  return (
    <div className='hero'
  
    style={{display: 'flex',justifyContent: 'center', alignItems: 'center' ,backgroundImage:  `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",height: '90vh'}}>

    <div className='hero-text'>
  <div>
<h1> <span className='letter'>N</span>
<span className='letter'>A</span>
<span className='letter'>F</span>
<span className='letter'>A</span>
<span className='letter'>S</span>
<span className='letter'>A</span>
<span className='letter'>T</span>
<span>&nbsp;</span>
<span className='letter'>F</span>
<span className='letter'>A</span>
<span className='letter'>S</span>
<span className='letter'>H</span>
<span className='letter'>I</span>
<span className='letter'>O</span>
<span className='letter'>N</span>
 </h1>
 
<p className='paragraph'
>At Nafasat Fashion, discover stylish and unique fashion pieces that match your personality. ✨ Explore our collection of beautiful outfits and give your wardrobe a fresh, elegant look. ❤️</p>
<div style={{ textAlign: 'center' }}>

<button   className="explore-btn"
style={{backgroundColor:'#F5AF19',height:'50px',width: '150px',    borderRadius: '15px'}}>Explore Collection</button>
</div>
</div>

</div>

 </div>
  )
};
export default Hero;