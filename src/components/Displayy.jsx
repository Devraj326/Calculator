import React from 'react'
import './Keys.css'
const display = (props) => {
  return (
    <div className='textt'>
      <div className="mid"><h4>Apple</h4></div>
      <input className='displayyy' type="text" value={props.expression} />
    </div>
  )
}

export default display