import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const CartModal = () => {

    const [totalAmount, setTotalAmount] = useState(0)
    const [products, setProducts] = useState([])

    const productId = JSON.parse(localStorage.getItem("cartItems")) || []
    console.log(productId)

    useEffect(() => {
        fetchProducts()
    }, [totalAmount])

    const fetchProducts = async () => {
        try {
            console.log("Log");
            const response = await axios.get("https://fakestoreapi.com/products")
            setProducts(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const HandleRemoveCart = async (id) => {
        setTotalAmount(totalAmount => totalAmount += 1)
        console.log(id)
        toast.info(id, {
            position: "top-center"
        })
    }

    const filteredProducts = products.filter((item) => productId.includes(item.id))
    console.log("Filtered Items :", filteredProducts)

    return (
        <div>
            <div className="min-h-96 max-h-[80vh] mt-6 lg:w-[1000px] w-full min-w-2xs flex-1 bg-gray-300 rounded-md shadow-lg flex flex-wrap gap-3 overflow-y-scroll [scrollbar-width:none] justify-around items-center">

                {filteredProducts.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col flex-1 justify-around rounded-md items-center h-96 min-w-3xs w-72 bg-sky-300 border-2 border-sky-800 p-3 m-3'>
                            <h1 className='p-3 text-center'>{item.title}</h1>
                            <img src={item.image} alt="img" className='w-32' />
                            {/* <p className='break-all p-3'>{item.description}</p> */}
                            <h1 className='p-3 text-center'>Price : ${item.price}</h1>
                            <button className='bg-green-500 p-3 text-black hover:cursor-pointer font-extrabold rounded-xl' onClick={() => HandleRemoveCart(item)}>Remove From Cart</button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default CartModal