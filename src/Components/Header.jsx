import React from 'react'


const Header = () => {
    return (
        <div className='bg-sky-100'>
            <div className='flex p-3 gap-3 justify-around'>
                <h1 className='font-bold'>VP</h1>
                <div className='relative hover:cursor-pointer'>
                    <img src={CartPng} alt="cart" width={52} />
                    <p className='absolute -top-2 -right-2'>{count}</p>
                </div>
            </div>
        </div>
    )
}

export default Header