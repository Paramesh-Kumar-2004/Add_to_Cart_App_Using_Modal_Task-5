import React from 'react'

const ProductCard = ({ items }) => {
    return (
        <div>
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
    )
}

export default ProductCard