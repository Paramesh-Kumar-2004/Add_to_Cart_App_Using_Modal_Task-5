import React, { useEffect, useState } from 'react'

const CartModal = () => {

    const data = JSON.parse(localStorage.getItem("cartItems")) || []

    return (
        <div className="min-h-96 lg:w-[1000px] w-[500px] min-w-2xs flex-1 bg-gray-300 rounded-md shadow-lg flex justify-center items-center">

            <div>
                {data.map((item) => {
                    return (
                        <h1>{item}</h1>
                    )
                })}
            </div>

        </div>
    )
}

export default CartModal