import Layout from '../../Components/Layout';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';


function MyOrders() {
  const context = useContext(ShoppingCartContext)
  
  return (

    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 className="text-xl font-bold my-8">My Orders</h1>
      </div>
      <div className="w-96">
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              orderDate={order.date} totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
          </Link>
        ))
      }
      </div>
      
      
    </Layout>
    
  )
}
  export default MyOrders