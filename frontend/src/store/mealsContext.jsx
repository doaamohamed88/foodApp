import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const mealsContext = createContext();

export default function MealsContextProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const[isopen ,setIsOpen]=useState(false)

  useEffect(() => {
    async function fetchMeals() {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:3000/meals");
        setMeals(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMeals();
  }, []);
  



  return (
    <mealsContext.Provider value={{ meals, loading, error,isopen,setIsOpen}}>
      {children}
    </mealsContext.Provider>
  );
}
