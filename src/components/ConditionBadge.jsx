import React from 'react'
const ConditionBadge = ({condition}) => {
    
let conditions ={

  likeNew : {
    title : "10/10 Condition",
    description : "Unworn / Like New"
  },

  gentlyUsed :{
    title : " 9/10 Condition",
    description : "Gently Used"
  },
  vintage :{
title : "vintage",
description: "Vintage Classic Piece"
  }
}

return(
<div className='cards'>
<h1> {conditions[condition].title} </h1>
<h2> {conditions[condition].description} </h2>
</div>
)

}

export default ConditionBadge