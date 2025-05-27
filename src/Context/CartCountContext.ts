import { createContext } from "react";

type CartCountContextType = {
  cartCount: number;
  setCartcount: React.Dispatch<React.SetStateAction<number>>;
};

export const CartCountContext = createContext<CartCountContextType>({
  cartCount: 0,
  setCartcount: () => {},
});
