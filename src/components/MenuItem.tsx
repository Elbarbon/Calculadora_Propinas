import type { MenuItem, OrderItem } from "../types";

type MenuItemsProps = {
    item: MenuItem;
    addItem: (item: OrderItem) => void;
    removeItem: (item: OrderItem) => void;
}

export default function MenuItem({ item , addItem, removeItem}: MenuItemsProps) {
  return (
    <button 
        className="border-2 border-teal-400 w-full p-3 flex justify-between hover:bg-teal-400 rounded-md"
        onClick={() => addItem({...item, quantity: 1})}
    >
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  )
}

