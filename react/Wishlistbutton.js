import React from 'react'
import { useCssHandles } from "vtex.css-handles"
import "./index.css"

const CSS_HANDLES = ["wishlistbutton"]

const Wishlistbutton = () =>{

  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div>

      <button className='wishlist_button'>Mandar</button>
      
    </div>
  )
}

export default Wishlistbutton;