import { useState } from "react"
import type { OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    function addItem(item: OrderItem) {
        const itemExists = order.find(orderItem => orderItem.id === item.id)
        if(itemExists) {
            setOrder(order.map(orderItem => 
                orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1}
                : orderItem
            ))
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
       
    }

    function removeItem(item: OrderItem) {
        setOrder(order.filter(i => i.id !== item.id))
    }

    return {
       order,
       addItem,
       removeItem
    }
}