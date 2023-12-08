import React from 'react'
import './Keys.css'
const display = (props) => {
  return (
    <div className='textt'>
      <input type="text" value={props.expression} />
    </div>
  )
}

export default display