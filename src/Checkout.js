import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
            <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="" />
            {basket?.length === 0 ? (
                <div className='checkout__empty'>
                    <h3>Your Amazon Cart is empty</h3>
                    <p> <strong> You have no items in your basket</strong> </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Amazon Cart</h2>
                    {basket?.map((item) => (
                        <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            )}
            </div>
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}

        </div>
    )
}

export default Checkout
