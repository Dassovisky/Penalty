import React from 'react'
import {useCssHandles} from 'vtex.css-handles'
import './WishListButton.css'

    const CSS_HANDLES = [
        'wishlistbutton',
        'sliderlays'
    ]

const WishListButton = () => {

    const handles = useCssHandles(CSS_HANDLES)

    return (
        <>
            <div className={`${handles.wishlistbutton}`}></div>
        </>
    )

}

export default WishListButton