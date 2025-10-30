import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import GetProducts from '../API/GetProducts'
import Loader from './Loader'


const CartModal = ({ HandleCartModal }) => {

    const [loading, setLoading] = useState(true)
    const [loadingMessage, setLoadingMessage] = useState("Loading...")
    const [totalAmount, setTotalAmount] = useState(0)
    const [products, setProducts] = useState([])

    const productId = JSON.parse(localStorage.getItem("cartItems")) || []
    console.log(productId)

    useEffect(() => {
        fetchData()
    }, [totalAmount])

    const fetchData = async () => {
        try {
            const response = await GetProducts()
            if (response) {
                setProducts(response)
                setLoading(!loading)
            }
            else {
                setLoadingMessage("Network Error...")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const HandleRemoveCart = async (id) => {
        const updatedCart = productId.filter((itemId) => itemId !== id);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));

        toast.warn(`Removed Item With ID : ${id}`, {
            position: "top-center",
            autoClose: 1000,
        });
    };


    const filteredProducts = products.filter((item) => productId.includes(item.id))
    const Amount = filteredProducts.reduce((acc, item) => acc + item.price, 0)


    if (loading) {
        return (
            <div className='h-screen w-full p-4 flex-1 bg-sky-600 rounded-md flex overflow-hidden justify-around items-center z-10'>
                <button onClick={HandleCartModal} className='absolute top-6 right-6  py-2 px-4 m-2 text-white bg-red-600 rounded-md hover:cursor-pointer'>X</button>
                <Loader loadingMessage={loadingMessage} />
            </div>
        )
    }

    return (
        <div className='h-screen w-full p-4 flex-1 bg-sky-500 rounded-md shadow-lg flex flex-col flex-wrap gap-3 overflow-y-scroll [scrollbar-width:none] justify-around items-center'>

            <div className='w-full flex flex-col justify-around items-center'>
                <div className='fixed top-0 px-3 py-2 w-full flex justify-between items-center bg-sky-400 border-4 border-sky-400'>
                    <h1>Total Amount : <b>{Amount}</b></h1>
                    <button onClick={HandleCartModal} className='py-2 px-4 m-2 text-white bg-red-600 rounded-md hover:cursor-pointer'>X</button>
                </div>
                <div className='flex pt-18 gap-5 flex-wrap justify-around'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((item) => (
                            <div key={item.id} className="flex flex-col justify-around rounded-md items-center h-auto w-80 bg-sky-300 border-2 border-sky-800 p-3" >
                                <h1 className="p-3 text-center">{item.title}</h1>
                                <img src={item.image} alt="img" className="w-32" />
                                <h1 className="p-3 text-center">Price : ${item.price}</h1>
                                <button className="bg-green-500 p-3 text-black hover:cursor-pointer font-extrabold rounded-xl" onClick={() => HandleRemoveCart(item.id)} >
                                    Remove From Cart
                                </button>
                            </div>
                        ))
                    ) : (
                        <h2 className="text-xl font-semibold text-gray-700 mt-10">
                            No Items In Your Cart.
                        </h2>
                    )}
                </div>
            </div>


        </div >
    )
}

export default CartModal