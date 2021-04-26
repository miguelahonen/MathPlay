import React from 'react';

const WhatNow = () => {
  // return(
  //   <div className='someClass'>
  //     <h1>What now?</h1>
  //   </div>
  // )
  return React.createElement(
    'div',
    {id: 'what', className: 'someClass'},
    React.createElement('h1', null, 'What now?'))
}

export default WhatNow
