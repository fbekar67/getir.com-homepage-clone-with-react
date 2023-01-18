import React from 'react'

function Category({category: {id, title, image}}) {
  return (
    <a href='#'>
        <img src={image} alt={title} />
        <div>{title}</div>
    </a>
  )
}

export default Category