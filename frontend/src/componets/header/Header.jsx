import React, { useContext, useEffect, useState } from 'react'
import style from"./header.module.css"
import logo from"../../assets/logo.jpg"
import { mealsContext } from '../../store/mealsContext'
import { cartContext } from '../../store/CartContext'
import { ModalContext } from '../../store/ModalContext'
export default function Header() {
    const {orderList}=useContext(cartContext)
    const {openModal}=useContext(ModalContext)
  
  return (
    <header className={style.header}>
      <div className='title'>
        <img src={logo}></img>
        <h1>EL-AKEEL</h1>
      </div>
      <button onClick={()=>openModal("cart")}>cart({orderList.length})</button>
    </header>
  )
}
