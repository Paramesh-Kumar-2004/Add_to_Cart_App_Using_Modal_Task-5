import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import GetProducts from '../API/GetProducts'
import Loader from '../Components/Loader'



export const Products = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")

    useEffect(() => {
        fetchData()
    }, [])

    const HandleCart = (id) => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || []
        if (!storedCart.includes(id)) {
            storedCart.push(id)
            console.log("Cart :", storedCart)
            localStorage.setItem("cartItems", JSON.stringify(storedCart))
            window.dispatchEvent(new Event("cartUpdated"));
            toast("Added to cart!", {
                position: "top-center",
                autoClose: 1000,
            });
        }
        else {
            toast.error("Product Is Already Added To The Cart", {
                position: "top-center",
                autoClose: 1000,
            });
        }
        console.log(storedCart)
    }

    const fetchData = async () => {
        try {
            const response = await GetProducts()
            if (response) {
                console.log(response)
                setItems(response)
                setLoading(!loading)
            }
            else {
                setLoadingMessage("Network Error...")
            }
        } catch (error) {
            console.log("Error :", error.message)
        }
    }

    if (loading) {
        return (
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Loader loadingMessage={loadingMessage} />
            </div>
        )
    }

    return (
        <div>

            {!loading && (

                <div className='flex gap-6 py-18 flex-wrap justify-around'>
                    {items.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col justify-around rounded-md items-center h-auto w-80 bg-transparent border-2 border-sky-400 p-3 shadow-[0_4px_10px_rgba(0,0,0,0.8)]'>
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