import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const Products = ({ count, setCount }) => {

    const [items, setItems] = useState([])

    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || []

    useEffect(() => {
        fetchData()
        setCount(storedCart.length)
    }, [])

    const HandleCart = (id) => {
        if (!storedCart.includes(id)) {
            storedCart.push(id)
            console.log("Cart :", storedCart)
            setCount(storedCart.length)
            localStorage.setItem("cartItems", JSON.stringify(storedCart))
        }
        else {
            alert("This Products Already Added In The Cart")
        }
        console.log(storedCart)
    }

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            console.log(response)
            setItems(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='flex gap-5 flex-wrap justify-around'>

                {items.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col justify-around rounded-md items-center h-auto w-96 bg-sky-300 border-2 border-sky-800 p-3'>
                            <h1 className='p-3 text-center'>{item.title}</h1>
                            <img src={item.image} alt="img" className='w-32' />
                            {/* <p className='break-all p-3'>{item.description}</p> */}
                            <h1 className='p-3 text-center'>Price : ${item.price}</h1>
                            <button className='bg-green-500 p-3 text-black hover:cursor-pointer font-extrabold rounded-xl' onClick={() => HandleCart(item.id)}>Add To Card</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )

}
