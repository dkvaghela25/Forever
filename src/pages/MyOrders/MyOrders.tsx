import { useContext } from "react"
import { OrdersContext } from "../../Context/OrdersContext"
import OrderItem from "../../Components/OrderItem/OrderItem";
import './MyOrders.css'

function MyOrders() {

  const { Orders } = useContext(OrdersContext);

  console.log(Orders);

  return (
    <div className='MyOrders'>
      <div className="heading">MY &nbsp; <b>ORDERS</b> <hr /></div>

      <div className="Orders">
        {Orders.map((item) => (
          <OrderItem
            id={item.id}
            image_url={item.image_url}
            title={item.title}
            price={item.price}
            size={item.size}
            quantity={item.quantity}
            order_date={item.orderDate} 
          />
        ))}
      </div>

    </div>
  )
}

export default MyOrders