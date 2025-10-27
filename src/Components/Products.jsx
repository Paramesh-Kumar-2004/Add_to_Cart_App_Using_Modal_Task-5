import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Products = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            console.log(response)
            setItems(response.data)
            console.log("Response :", response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex gap-5 flex-wrap justify-around'>

            {items.map((item) => {
                return (
                    <div key={item.id} className='flex flex-col justify-around items-center h-auto w-96 bg-sky-300'>
                        <h1 className='p-3 text-center'>{item.title}</h1>
                        <img src={item.image} alt="img" className='w-40' />
                        <h1 className='p-3 text-center'>Price : ${item.price}</h1>
                    </div>
                )
            })}

        </div>
    )

}
