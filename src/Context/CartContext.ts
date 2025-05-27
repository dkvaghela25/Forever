import { createContext } from "react";

interface Cart {
    id: number;
    image_url: string;
    title: string;
    price: number;
    size: string;
}


type CartContextType = {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
});
