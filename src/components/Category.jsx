import React from 'react'
import './css/Category.css';


   
      
const  Category = ({category, image, description}) => {
  return (
  
    <div className='category-card'>
    <div className='card'>

    <img src={image} alt="ladies" />
      <h2> {category}</h2>
      <p>{description}</p>
    </div>
     </div>
      
  )
}

export default Category