import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import GetProducts from '../API/GetProducts'
import Loader from '../Components/Loader'



export const Products = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || []

    useEffect(() => {
        fetchData()
        window.addEventListener("cartUpdated", fetchData());
        return () => {
            window.removeEventListener("cartUpdated", fetchData());
        };
    }, [])

    const HandleCart = (id) => {
        if (!storedCart.includes(id)) {
            storedCart.push(id)
            console.log("Cart :", storedCart)
            localStorage.setItem("cartItems", JSON.stringify(storedCart))
            window.dispatchEvent(new Event("cartUpdated"));
            toast("Added to cart!", {
                position: "top-center"
            });
        }
        else {
            toast.error("Product is already added to the cart", {
                position: "top-center",
            });
        }
        console.log(storedCart)
    }

    const fetchData = async () => {
        try {
            const response = await GetProducts()
            console.log(response)
            setItems(response)
            setLoading(!loading)
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div>

            {!loading && (

                <div className='flex gap-5 flex-wrap justify-around'>
                    {items.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col justify-around rounded-md items-center h-auto w-96 bg-sky-300 border-2 border-sky-800 p-3'>
                                <h1 className='p-3 text-center'>{item.title}</h1>
                                <img src={item.image} alt="img" className='w-32' />
                                {/* <p className='break-all p-3'>{item.description}</p> */}
                                <h1 className='p-3 text-center'>Price : ${item.price}</h1>
                                <button className='bg-green-500 p-3 text-black hover:cursor-pointer font-extrabold rounded-xl' onClick={() => HandleCart(item.id)}>Add To Cart</button>
                            </div>
                        )
                    })}
                </div>

            )}
        </div>
    )

}