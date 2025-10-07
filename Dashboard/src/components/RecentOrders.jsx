import React from 'react'
import { Link } from 'react-router-dom'
import {getOrderStatus} from '../lib/utils/Index'

const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lape',
        order_date: '2022-05-17T03:24:00',
        order_total: '$435.50',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '2',
        product_id: '5434',
        customer_id: '65345',
        customer_name: 'Mason Nash',
        order_date: '2022-05-17T07:14:00',
        order_total: '$836.44',
        current_order_status: 'SHIPPED',
        shipment_address: 'Westminster, CA 92683'
    },
    {
        id: '9',
        product_id: '9854',
        customer_id: '87832',
        customer_name: 'Luke Parkin',
        order_date: '2022-05-16T12:40:00',
        order_total: '$334.50',
        current_order_status: 'SHIPPED',
        shipment_address: 'San Mateo, CA 94403'
    }
]
const RecentOrders = () => {
    return (
        <div className='bg-white  pt-1 rounded-sm border border-gray-200 flex-1'>
            <strong className='text-gray-700 font-sm ml-5'>
                Recent Orders
            </strong>
            <div className='mt-1 font-sm ml-5'>
                <table className='text-gray-700 border-x border-gray-200 rounded-sm'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Product id</td>
                            <td>Customer Name</td>
                            <td>Order Date</td>
                            <td>Order Total</td>
                            <td>Shipping address</td>
                            <td>order status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) =>
                            <tr key={order.id}>

                                <td>{order.id}</td>
                                <td>
                                <Link to='/product/${order.product_id}'>
                                    #{order.product_id}
                                </Link>
                                </td>
                                <td>{order.customer_name}</td>
                                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                                <td>{order.order_total}</td>
                                <td>{order.shipment_address}</td>
                                <td>{getOrderStatus(order.current_order_status)}</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default RecentOrders
