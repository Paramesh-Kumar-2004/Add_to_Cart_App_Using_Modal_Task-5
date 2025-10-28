import React, { useEffect } from 'react'
import CartPng from "../assets/Cart.png"


const Header = () => {

    const count = JSON.parse(localStorage.getItem("cartItems")) || []
    console.log(count)

    return (
        <div>
            <div className='flex p-3 gap-3 justify-around'>
                <h1 className='font-bold'>VP</h1>
                <div className='relative hover:cursor-pointer'>
                    <img src={CartPng} alt="cart" width={52} />
                    <p className='absolute -top-2 -right-2'>{count.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Header