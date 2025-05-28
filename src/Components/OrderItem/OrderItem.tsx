import './OrderItem.css'
import ToastHelper from '../../helper/toastHelper';

interface OrderItemProps {
    id: number;
    image_url: string;
    title: string;
    price: number;
    size: string;
    quantity: number;
    order_date: string;
}

function OrderItem(props: OrderItemProps) {

    return (
        <div className="OrderItem">
            <img src={props.image_url} alt="" />
            <div>
                <div className="item-title">{props.title}</div>
                <div className="other-details">
                    <div>
                        <div className="item-price">${props.price}</div>
                        <div><b>Quantity:</b> {props.quantity}</div>
                        <div><b>Size:</b> {props.size}</div>
                    </div>
                    <div className='order-status'>
                        <div></div>
                        <div>Ready to ship</div>
                    </div>
                    <div className='track-order'>Track Order</div>
                </div>
                <div className='order-date'><b>Date:</b> {props.order_date}</div>
            </div>
        </div>
    )
}

export default OrderItem