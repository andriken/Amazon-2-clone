import { StarIcon } from "@heroicons/react/outline"
import Image from "next/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"


function CheckoutProduct({ 
    id,
    title,
    price, 
    rating,
    description, 
    category,
    image,
    hasPrime }) {

    const dispatch = useDispatch();

    const addItemsToBasket = () => {

        const products = { 
            id,
            title,
            price, 
            rating,
            description, 
            category,
            image,
            hasPrime }

        dispatch(addToBasket(products));
    }


    
    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({id}));
    }

  return (
    <div className='grid grid-cols-5'>
        <Image src={image} height={200} width={200} objectFit="contain" />

        {/* Middle */}
        <div className="col-span-3 mx-5">
            <p>{title}</p>
            
            <div className='flex'>
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2 line-clamp-3">
                {description}
            </p>
            <Currency quantity={price} currency="GBP" />

            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img loading="lazy"
                        className="w-12" 
                        src="images/prime-tag-2.png" 
                        alt="" 
                    />
                    <p className="text-xs text-gray-500">Free Next-day Delivery</p>
                </div>
            )}
        </div>


        <div className="flex flex-col space-y-2 my-auto justify-items-center">
        <button className="button mt-auto" onClick={addItemsToBasket}>Add to Basket</button>
        <button className="button mt-auto" onClick={removeItemFromBasket}>Remove from Basket</button>
        </div>
        

    </div>

  )
}

export default CheckoutProduct