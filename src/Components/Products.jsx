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
            setItems(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>

            {items.map((item) => {
                return (
                    <div key={item.id} >
                        <img src={item.image} alt="image" />
                    </div>
                )
            })}

        </div>
    )

}
