import { Toaster } from "react-hot-toast";
import Home from "./pages/home/Home";
import MealsContextProvider from "./store/mealsContext";
import CartContextPreovider from "./store/CartContext";
import ModalContextProvider, { ModalContext } from "./store/ModalContext";
function App() {
  return (
    <>
      <MealsContextProvider>
        <CartContextPreovider>
          <ModalContextProvider>
            <Toaster />
            <div className="container">
              <Home />
            </div>
          </ModalContextProvider>
        </CartContextPreovider>
      </MealsContextProvider>
    </>
  );
}

export default App;
