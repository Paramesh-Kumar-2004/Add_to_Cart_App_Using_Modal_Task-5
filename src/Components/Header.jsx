import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CartPng from "../assets/Cart.png"
import CartModal from './CartModal';


const Header = () => {

    const [count, setCount] = useState(0);
    const [openModal, setOpenModal] = useState(!false)

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

    function HandleCartModal() {
        setOpenModal(!openModal)
    }

    return (
        <div>

            {openModal && (
                // <div className="w-11/12 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <CartModal HandleCartModal={HandleCartModal} />
                </div>
            )}

            <div className='fixed w-full flex p-2 px-12 gap-3 justify-between items-center mb-2 rounded-lg bg-sky-600'>
                <h1 className='font-extrabold font-serif text-xl text-white'>VP</h1>
                <div className='relative hover:cursor-pointer'
                    onClick={HandleCartModal}
                >
                    <img src={CartPng} alt="cart" width={40} />
                    <p className='absolute -top-2 -right-3 font-extrabold text-white'>{count}</p>
                </div>
            </div>
        </div>
    )
}

export default Header