import React, { useContext, useState } from "react";
import { createContext } from "react";
import { mealsContext } from "./mealsContext";
import toast from "react-hot-toast";

export const cartContext = createContext("");

export default function CartContextPreovider({ children }) {
  const [orderList, setOrderList] = useState([]);
  const {meals}=useContext(mealsContext)
  function addToCart(id) {
    const newOrder = meals.find((meal) => meal.id === id);
    if (!newOrder) return;

    const isFound = orderList.some((meal) => meal.id === newOrder.id);

    if (isFound) {
      toast.error("This item is already added to cart");
    } else {
      setOrderList([...orderList, { ...newOrder, count: 1 }]);
      toast.success("Added to cart!");
    }
  }
  function handleIncreaseCount(id) {
    setOrderList(prev =>
      prev.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  function handleDecreaseCount (id) {
    setOrderList(prev =>
      prev.map(item =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  }

  const total = orderList.reduce(
    (sum, item) => sum + item.count * item.price, 
    0
  );

  return (
    <cartContext.Provider value={{ orderList, setOrderList,addToCart,handleIncreaseCount,handleDecreaseCount,total }}>
      {children}
    </cartContext.Provider>
  );
}
