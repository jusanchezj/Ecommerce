import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';
import { FiArrowLeftCircle } from 'react-icons/fi';


function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname //me da la ruta o link donde esta parado 
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index === 'last') index = context.order?.length - 1

  return (
    <Layout>
        <div className='flex items-center justify-center w-80 mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
            <FiArrowLeftCircle className='h6 w-6 text-black cursor-pointer' />
          </Link>
          <h1>My Order</h1>
        </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          ))
        }
      </div>
    </Layout>
  )
}
  export default MyOrder