import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom';
import './DeliveryInformation.css'

import RazorpayLogo from './razorpay_logo.png';
import StripeLogo from './stripe_logo.png'

function DeliveryInformation() {

    const { cart } = useContext(CartContext);

    const navigate = useNavigate();

    return (
        <div className="DeliveryInformation">
            <div className="delivery-info">
                <div className="heading">DELIVERY &nbsp; <b>INFORMATION</b> <hr /></div>
                <form action="">
                    <div>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>
                    <input type="text" placeholder='Email addess' />
                    <input type="text" placeholder='Street' />
                    <div>
                        <input type="text" placeholder='City' />
                        <input type="text" placeholder='State' />
                    </div>
                    <div>
                        <input type="text" placeholder='Zip code' />
                        <input type="text" placeholder='Country' />
                    </div>
                    <input type="text" placeholder='Phone' />
                </form>
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
                <div className="payment-method">
                    <div className="heading">PAYMENT &nbsp; <b>METHOD</b> <hr /></div>
                    <form action="" className="methods">
                        <div>
                            <input type="radio" id="stripe" name="payment-method" value="stripe" />
                            <label htmlFor="stripe"><img src={StripeLogo} alt="Stripe" /></label>
                        </div>
                        <div>
                            <input type="radio" id="razorpay" name="payment-method" value="razorpay" />
                            <label htmlFor="razorpay"><img src={RazorpayLogo} alt="Razorpay" /></label>
                        </div>
                        <div>
                            <input type="radio" id="cod" name="payment-method" value="cod" />
                            <label htmlFor="cod">CASH ON DELIVERY</label>
                        </div>
                    </form>
                        <button className="procced-checkout" onClick={() => navigate('/delivery-info')}>Place Order</button>
                </div>
            </div>
        </div>
    )
}

export default DeliveryInformation