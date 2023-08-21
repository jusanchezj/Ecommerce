import {BiChevronRightCircle} from 'react-icons/bi';
import {LuCalendarDays} from 'react-icons/lu';
import {BsCurrencyDollar} from 'react-icons/bs';
import {AiOutlineShoppingCart} from "react-icons/ai";


const OrdersCard = ({orderDate, totalPrice, totalProducts}) => {

    return (
        <>
            <div className="flex justify-between items-center mb-3 border rounded-lg p-3">
                <div className="flex items-center justify-between grow gap-2 px-4">
                    <div className="flex gap-1 items-center justify-center">
                        <AiOutlineShoppingCart className="h-6 w-6 text-black" />
                        <p className="font-light text-sm">{`${totalProducts} ${totalProducts === 1 ? "producto" : "productos"}`}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <BsCurrencyDollar className="h-6 w-6 text-black" />
                        <p className="font-light text-sm">{totalPrice}</p>
                    </div>
                    <div className="flex gap-1 items-center justify-center">
                        <LuCalendarDays className="h-6 w-6 text-black" />
                        <p className="font-light text-sm">{orderDate}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <BiChevronRightCircle className="h-6 w-6 text-black" />
                </div>
            </div>
        </>
    );
}

export default OrdersCard;