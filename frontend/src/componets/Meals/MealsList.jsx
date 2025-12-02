import React, { useContext, useState } from "react";
import { mealsContext } from "../../store/mealsContext";
import styles from "../../pages/home/home.module.css";
import Mealitem from "./Mealitem";
import { cartContext } from "../../store/CartContext";
import { ModalContext } from "../../store/ModalContext";
import CartModal from "../modals/CartModal";
import Checkout from "../../pages/checkout/Checkout";
import CongratulationsModal from "../modals/CongratulationsModal";

export default function MealsList() {
  const { meals } = useContext(mealsContext);
  const { modal } = useContext(ModalContext);
  const { addToCart } = useContext(cartContext);

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  // Dynamically filter meals
  const filteredList = meals.filter((item) =>
    item.name.toLowerCase().includes(searchValue)
  );

  return (
    <>
      <section>
        <h1>Main Meals</h1>

        <input
          type="search"
          placeholder="Search meals..."
          value={searchValue}
          onChange={handleSearch}
          className={styles.searchInput}
        />

        {filteredList.length === 0 && <p>No meals found</p>}

        <div className={styles.mealsContainer}>
          {filteredList.map((item) => (
            <Mealitem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              image={`http://localhost:3000/${item.image}`}
              price={item.price}
              onClick={() => addToCart(item.id)}
            />
          ))}
        </div>
      </section>

      {modal === "cart" && <CartModal />}
      {modal === "checkout" && <Checkout />}
      {modal === "congrats" && <CongratulationsModal />}
    </>
  );
}
