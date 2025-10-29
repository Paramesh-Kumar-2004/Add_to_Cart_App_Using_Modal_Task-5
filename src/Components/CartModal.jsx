import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import GetProducts from '../API/GetProducts'
import Loader from './Loader'


const CartModal = ({ HandleCartModal }) => {

    const [loading, setLoading] = useState(true)
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
            console.log(response)
            setProducts(response)
            setLoading(!loading)
        } catch (error) {
            console.log(error)
        }
    }

    const HandleRemoveCart = async (id) => {
        const updatedCart = productId.filter((itemId) => itemId !== id);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));
        toast.info(`Removed item with id: ${id}`, {
            position: "top-center",
        });
    };


    const filteredProducts = products.filter((item) => productId.includes(item.id))
    const Amount = filteredProducts.reduce((acc, item) => acc + item.price, 0)

    if (loading) {
        return (
            <div className='h-screen w-full mt-6 p-4 flex-1 bg-gray-300 rounded-md shadow-lg flex flex-col flex-wrap gap-3 overflow-y-scroll [scrollbar-width:none] justify-around items-center'>
                <Loader />
            </div>
        )
    }

    return (
        <div className='h-screen w-full mt-6 p-4 flex-1 bg-gray-300 rounded-md shadow-lg flex flex-col flex-wrap gap-3 overflow-y-scroll [scrollbar-width:none] justify-around items-center'>

            <div className='flex flex-col justify-around items-center'>
                <div className='w-full flex justify-between items-center border-b-2 border-amber-400 mb-2'>
                    <h1>Total Amount : <b>{Amount}</b></h1>
                    <button onClick={HandleCartModal} className='p-2 m-2 text-white bg-red-600 rounded-md hover:cursor-pointer'>X</button>
                </div>
                <div className='flex gap-5 flex-wrap justify-around'>
                    {filteredProducts.map((item) => {
                        return (
                            <div key={item.id} className='flex flex-col justify-around rounded-md items-center h-auto w-96 bg-sky-300 border-2 border-sky-800 p-3'>
                                <h1 className='p-3 text-center'>{item.title}</h1>
                                <img src={item.image} alt="img" className='w-32' />
                                {/* <p className='break-all p-3'>{item.description}</p> */}
                                <h1 className='p-3 text-center'>Price : ${item.price}</h1>
                                <button className='bg-green-500 p-3 text-black hover:cursor-pointer font-extrabold rounded-xl' onClick={() => HandleRemoveCart(item.id)}>Remove From Cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default CartModal