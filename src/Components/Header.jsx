import React, { useEffect, useState } from 'react'
import CartPng from "../assets/Cart.png"


const Header = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCount(storedCart.length);

        const handleCartChange = () => {
            const updatedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
            setCount(updatedCart.length);
        };

        window.addEventListener("cartUpdated", handleCartChange);
        return () => {
            window.removeEventListener("cartUpdated", handleCartChange);
        };
    }, []);

    return (
        <div>
            <div className='flex p-3 gap-3 justify-around'>
                <h1 className='font-bold'>VP</h1>
                <div className='relative hover:cursor-pointer'>
                    <img src={CartPng} alt="cart" width={52} />
                    <p className='absolute -top-2 -right-2'>{count}</p>
                </div>
            </div>
        </div>
    )
}

export default Header