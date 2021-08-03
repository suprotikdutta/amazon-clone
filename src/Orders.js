import { React, useState } from 'react'
import "./Orders.css"
import { db } from "./firebase";

function Orders() {
    const [orders, setOrders] = useState([]);

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <p>This page doesn't work because I dont have the firebase premium account.Please bear with me</p>
        </div>
    )
}

export default Orders
