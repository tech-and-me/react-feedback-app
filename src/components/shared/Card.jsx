import React from 'react'
import PropTypes from 'prop-types';

const Card = ({ children, reverse }) => {


  //Method 1: conditional class Dark Mode : Light Mode
  // return (
  //   <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  // )


  //Method 2: Conditional style Dark Mode : Light Mode
  return (
    <div className='card' style={{
      backgroundColor: reverse ? 'rgba(0,0,0,0.3)' : "white",
      color: reverse ? 'white' : 'black'
    }}>
      {children}
    </div>
  )
}



Card.defaultProps = {
  reverse: false,
}

Card.prototype ={
  children:PropTypes.node.isRequired,
  reverse:PropTypes.bool,
}

export default Card