import { createContext } from "react";

export interface Order {
    product_id: string;
    title: string;
    price: number;
    quantity: number;
    image_url: string;
    orderDate: string; // Add this new field
}

type OrdersContextType = {
  Orders: any[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

export const OrdersContext = createContext<OrdersContextType>({
  Orders: [],
  setOrders: () => {},
});
