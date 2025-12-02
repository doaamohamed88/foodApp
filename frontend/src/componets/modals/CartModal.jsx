import React, { useContext } from "react";
import AppModal from "./AppModal";
import { cartContext } from "../../store/CartContext";
import Button from "../ui/Button";
import { ModalContext } from "../../store/ModalContext";
import styles from "./modal.module.css";

export default function CartModal() {
  const { orderList, total, handleDecreaseCount, handleIncreaseCount } =
    useContext(cartContext);
  const { closeModal, openModal } = useContext(ModalContext);

  return (
    <AppModal title="Your Cart">
      
      <div className={styles.cartItems}>
        {orderList.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            
            <h3 className={styles.itemInfo}>
              {item.name} — {item.count} × ${item.price}
            </h3>

            <div className={styles.counter}>
              <button onClick={() => handleIncreaseCount(item.id)}>+</button>
              <span>{item.count}</span>
              <button onClick={() => handleDecreaseCount(item.id)}>-</button>
            </div>
          </div>
        ))}
      </div>

      <p className={styles.total}>Total: ${total.toFixed(2)}</p>

      <div className={styles.actions}>
        <Button onClick={closeModal} varient="close">Close</Button>
        <Button
          disabled={orderList.length === 0}
          onClick={() => openModal("checkout")}
        >
          Go to Checkout
        </Button>
      </div>
    </AppModal>
  );
}
