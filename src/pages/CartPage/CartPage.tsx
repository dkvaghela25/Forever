import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

function CartPage() {

    const { cart } = useContext(CartContext);

    console.log(cart);

    return (
    <div>
        This is the Cart Page.
    </div>
  )
}

export default CartPage