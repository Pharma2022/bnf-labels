import React from 'react'

const Boxes = ({arr}) => {
  return (    arr.map(({label,labelMessage})=>(
      <div className='label-container container flex-col' key={label}>
          <p>Label {label} </p>
          <p>{labelMessage}</p>
      </div>
    )
    )
  )
}

export default Boxes