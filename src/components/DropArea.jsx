import React, { useState } from 'react'

import './DropArea.css';


const DrapArea = ({onDrop}) => {
  const [showDrop, setShowDrop] = useState(false)
  return (
    <div>
      <section 
      onDragEnter={()=> setShowDrop(true)}  
      onDragLeave={()=> setShowDrop(false)}
      onDrop={()=> {
        onDrop();
        setShowDrop(false)
      }}
      onDragOver={(e) => e.preventDefault()} 
      className={showDrop ? 'drop_area' : 'hide_drop'}> 
      Drop Here </section>
    </div>
  )
}

export default DrapArea
