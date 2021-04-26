import React from 'react'

export const Greet = props => {
  // console.log(props);
  return (
    <div>
      <h1>
        Hi {props.name}, are you math enthusiast or are you keen on {props.isKeenOn}?
      </h1>
      {props.children}
    </div>
  )
}

// export default Greet
