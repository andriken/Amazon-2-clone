import Header from '../components/Header';
import CheckoutProduct from '../components/CheckoutProduct';


import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { selectTotal } from '../slices/basketSlice';
import Currency from 'react-currency-formatter';

function checkout() {
    const items = useSelector((state) => state.basket.items);
    const session = useSession();
    
    const total = useSelector(selectTotal);

  return (
    <div className='bg-gray-100'>
        <Header />

        <main className='lg:flex max-w-screen-2xl mx-auto'>
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                    src="/images/checkout-advert.png"
                    width={1020}
                    height={250}
                    objectFit="contain"
                />

                <div className='flex flex-col p-5 space-y-10 bg-white'>
                    <h1 className='text-3xl border-b pb-4'>{ items.length === 0 ? 
                        "Your Shopping Basket Is Empty" : "Shopping Basket" }
                    </h1>

                    {items.map((product, i) => (
                        <CheckoutProduct 
                            key={i}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            rating={product.rating}
                            description={product.description}
                            category={product.category}
                            image={product.image}
                            hasPrime={product.hasPrime} />
                    ))}

                </div>

            </div>
            
            {/* Right */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length > 0 && (
                    <>
                        <h2 className='whitespace-nowrap'>
                            Subtotal ({items.length} items):
                            <span className='font-bold'>
                                <Currency quantity={total} currency="GBP" />
                            </span>
                        </h2>

                        <button
                            disabled={!session} 
                            className={`button mt-2 ${!session && "from-gray-200 to-gray-500"}`}>
                            {!session ? "Sign in to checkout" : "Proceed to checkout"}
                        </button>
                    </>
                )}
            </div>
        </main>
    </div>
  )
}

export default checkout