import { useState } from 'react';
import './CartItem.css'
import IncrementButton from './increment-button.svg'
import DecrementButton from './decrement-button.svg'
import DeleteButton from './delete_icon.svg'

interface CartItemProps {
    id: number;
    image_url: string;
    title: string;
    price: number;
    size: string;
}

function CartItem(props: CartItemProps) {

    console.log(props);

    const [quantity, setQuantity] = useState(1);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const incrementQuantity = () => {
        setQuantity(quantity + 1);  
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
                        <div className="quantity-value">{quantity}</div>
                        <div className='quantity-controller'>
                            <img src={IncrementButton} onClick={incrementQuantity} alt="" />
                            <img src={DecrementButton} onClick={decrementQuantity} alt="" />
                        </div>
                    </div>
                    <img className='delete-button' src={DeleteButton} alt="" />
                </div>
            </div>
        </div>
    )
}

export default CartItem