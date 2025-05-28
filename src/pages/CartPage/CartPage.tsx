import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartItem from '../../Components/CartItem/CartItem';
import './CartPage.css';
import Collections from '../../assets/Collections/Collections';
import Card from '../../Components/CardComponent/Card';
import { useNavigate } from 'react-router-dom';

function CartPage() {

    const { cart } = useContext(CartContext);
    
    const navigate = useNavigate();

    console.log(cart);

    return (
        <div className='CartPage'>
            <div className="heading">Your &nbsp; <b>CART</b> <hr /></div>

            {cart.length === 0 ? (
                <div className="empty-cart">
                    <h1>Your cart is empty</h1>
                    <h2>Start shopping to add items to your cart.</h2>
                    <div className="latest-collections">
                        <div className="heading">Latest &nbsp; <b>Collections</b> <hr /></div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
                        <div className="Cards">
                            {Collections.slice(0, 10).map((item) => (
                                <Card
                                    id={item.product_id}
                                    image_url={item.image_url}
                                    title={item.title}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="non-empty-cart">

                    <div className="Cart">
                        {cart.map((item) => (
                            <CartItem
                                id={item.id}
                                image_url={item.image_url}
                                title={item.title}
                                price={item.price}
                                size={item.size}
                                quantity={item.quantity}
                            />
                        ))}
                    </div>

                    <div className="cart-totals">
                        <div className="heading">CART &nbsp; <b>TOTALS</b> <hr /></div>
                        <div>
                            <div>Subtotal</div>
                            <div>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</div>
                        </div>
                        <hr />
                        <div>
                            <div>Shipping Free</div>
                            <div>-$10</div>
                        </div>
                        <hr />
                        <div>
                            <div><b>Total</b></div>
                            <div><b>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0) - 10}</b></div>
                        </div>
                        <button className="procced-checkout" onClick={() => navigate('/delivery-info')}>Proceed to checkout</button>
                    </div>

                </div>
            )}

        </div>
    )
}

export default CartPage