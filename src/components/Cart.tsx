import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { RxCross1 } from "react-icons/rx"
import CartProduct from "./CartProduct"
import Link from "next/link"

const Cart = ({ setShowCart }: any) => {
    const products = useAppSelector((state) => state.cart);
    const cartCount = useAppSelector((state) => state.cart.length);


    const getTotal = () => {
        let total = 0;
        products.forEach((item) => (total = total + item.price * item.quantity));
        return total;
    };

  return (
    <div className='bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll'>
        <div className='max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6'>
            <RxCross1
            className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
            onClick={() => setShowCart(false)}
            />
            <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>
                Your Cart
                </h3>
                <p>You have no products.</p>

                <h3 className='pt-6 text-lg font-medium text-gray-600 uppercase'>
                Your Wishlist
                </h3>

                <div className='mt-6 space-y-2'>
                    {products?.map((item: any) => (
                        <CartProduct
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        />
                    ))}
                </div>

            <div className='flex justify-between items-center font-medium text-xl py-4'>
            </div>
            <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4'>
                View Cart
            </button>
            <Link href={"/wishlist"}>
            <button className='bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent'>
                View Wishlist &#40;{cartCount}&#41;
            </button></Link>
           </div>
        </div>
  );
};

export default Cart