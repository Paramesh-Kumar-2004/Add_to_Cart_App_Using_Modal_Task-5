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
                    <div key={item.id} className='h-auto w-96 bg-amber-400'>
                        <img src={item.image} alt="img" className=''/>
                        <h1 className='p-3 text-center'>{item.title}</h1>
                        <h1 className='p-3 text-center'>{item.price}</h1>
                    </div>
                )
            })}

        </div>
    )

}
