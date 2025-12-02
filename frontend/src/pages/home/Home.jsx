import React, { useContext, useEffect, useState } from "react";
import Header from "../../componets/header/Header";
import MealsList from "../../componets/Meals/MealsList";

export default function Home() {
  return <>
  <Header></Header>
  <MealsList/>
  </>;
}
