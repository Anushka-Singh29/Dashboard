import React from 'react'
import { Link } from 'react-router-dom'

const popularProducts = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://images.unsplash.com/photo-1600374917838-1df876d745c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        product_price: '$399.00',
        product_stock: 0
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://images.unsplash.com/photo-1661595675376-83b51c5a0963?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://m.media-amazon.com/images/I/61Q04c0ufLL._SL1500_.jpg',
        product_price: '$499.00',
        product_stock: 98
    },

]

const PopularProducts = () => {
    return (
        <div className='bg-white px-1 pt-1 pb-1 rounded-sm border border-gray-200 w-[18rem]'>
            <strong className='text-gray-700 font-sm'>
                Popular products
            </strong>
            <div className='mt-2 flex flex-col gap-1'>
                {popularProducts.map(product=>(
                    <Link to={`/product/$product.id`} className='flex hover:no-underline' >
                        <div className='w-7 h-7 min-w-7 bg-gray-300 rounded-sm overflow-hidden'>
                            <img className='w-full h-full object-cover' src={product.product_thumbnail} alt="" />
                        </div>
                        <div className='ml-2 flex-1'>
                            <p className='text-sm text-gray-800'>{product.product_name}</p>
                            <span className={`text-sm font-light text-gray-400 ${product.product_stock === 0 ? 'text-red-500' : 'text-green-500' } 'text-red-500'`}>{product.product_stock === 0 ? 'out of stock' : product.product_stock + " in stock"}</span>
                        </div>
                        <div className='text-sm text-gray-400'>
                            {product.product_price}
                        </div>
                    </Link>
                )) }

            </div>
        </div>
    )
}

export default PopularProducts
