import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../../Components/CartItem/CartItem';
import './CartPage.css';

function CartPage() {

    const { cart } = useContext(CartContext);

    console.log(cart);

    return (
        <div className='CartPage'>
            <div className="heading">Your &nbsp; <b>CART</b> <hr /></div>
            <div className="Cart">
                {cart.map((item) => (
                    <CartItem
                        id={item.id}
                        image_url={item.image_url}
                        title={item.title}
                        price={item.price}
                        size={item.size}
                    />
                ))}
            </div>
        </div>
    )
}

export default CartPage