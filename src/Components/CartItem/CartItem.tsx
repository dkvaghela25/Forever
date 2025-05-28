import { useState } from 'react';
import './CartItem.css'
import IncrementButton from './increment-button.svg'
import DecrementButton from './decrement-button.svg'
import DeleteButton from './delete_icon.svg'
import { CartContext } from '../../Context/CartContext';
import { CartCountContext } from '../../Context/CartCountContext';
import { useContext } from 'react';
import ToastHelper from '../../helper/toastHelper';

interface CartItemProps {
    id: number;
    image_url: string;
    title: string;
    price: number;
    size: string;
    quantity: number;
}

function CartItem(props: CartItemProps) {

    const { cart, setCart } = useContext(CartContext);
    const { setCartcount } = useContext(CartCountContext);

    const decrementQuantity = () => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === props.id
                    ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                    : item
            )
        );
    }

    const incrementQuantity = () => {

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === props.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );

    }

    const removeItemFromCart = () => {
        const updatedCart = cart.filter(item => item.id !== props.id);
        setCart(updatedCart);
        setCartcount(updatedCart.length);
        ToastHelper.success("Item removed from cart successfully!");
    }

    return (
        <div className="CartItem">
            <img src={props.image_url} alt="" />
            <div>
                <div className="item-title">{props.title}</div>
                <div className="other-details">
                    <div>
                        <div className="item-price">${props.price}</div>
                        <div className="size">{props.size}</div>
                    </div>
                    <div className="quantity">
                        <div className="quantity-value">{props.quantity}</div>
                        <div className='quantity-controller'>
                            <img src={IncrementButton} onClick={incrementQuantity} alt="" />
                            <img src={DecrementButton} onClick={decrementQuantity} alt="" />
                        </div>
                    </div>
                    <img className='delete-button' src={DeleteButton} onClick={removeItemFromCart} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CartItem