import React, { useContext } from 'react'
import styles from"../../pages/home/home.module.css"

export default function Mealitem({description,price,name,image,onClick}) {
    return (
    <div className={styles.mealItem}> 
      <img src={image}></img>
      <h3>{name}</h3>
      <span>${price}</span>
      <p>{description}</p>
      <button onClick={onClick} >Add order</button>
    </div>
  )
}
