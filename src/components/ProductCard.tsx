"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import { AiFillStar, AiOutlineStar, AiOutlineShoppingCart, AiOutlineHeart, AiOutlinePlus} from "react-icons/ai"
import { useAppDispatch } from '@/redux/hooks';
import { addToCart } from '@/redux/features/cartSlice';
import toast from "react-hot-toast";
import { useRouter } from 'next/navigation';

export interface IProduct {
    id: number;
    image: string | StaticImageData;
    category: string;
    title: string;
    price:string ;
    sale: boolean | undefined;
    range: any;
    sortby: string;
    rating: number;
}



const ProductCard = ({ id, image, category, sale, title, price, range, sortby, rating}: IProduct) => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const getRating = () => {
        const randomNumber = (min: number, max: number) => {
            return Math.ceil(Math.random() * (max - min) + min);
        };
    
        switch (randomNumber(0, 5)) {
            case 0:
             return (
                <div className='flex justify-center  pb-2'>
                        0
                </div>
             );
             case 1:
                return (
                    <div className='flex justify-center  pb-2'>
                        1
                    </div>
                 );
                 case 2:
                return (
                    <div className='flex justify-center  pb-2'>
                        2
                    </div>
                 );
                 case 3:
                return (
                    <div className='flex justify-center pb-2 '>
                        3
                    </div>
                 );
                 case 4:
                return (
                    <div className='flex justify-center pb-2'>
                        4
                    </div>
                 );
                 case 5:
                return (
                    <div className='flex justify-center pb-2'>
                        5
                    </div>
                 );

    
            default:
                return <div></div>
        }
    };

    const addProductToCart = () => {

        const payload = {
            id,
            image,
            title,
            category,
            sale,
            price: parseFloat(price),
            quantity: 1,
            range,
            sortby,
            rating
        };

        dispatch(addToCart(payload));
        toast.success("Added to Wishlist!!")
    };


  return (
    <div className='group cursor-pointer px-8 rounded-full ' onClick={() => router.push(`/details/${id}`)}>

    <div className='relative'>
        <div className='text-center'>
        <div className='absolute left-0 w-full h-full  cursor-pointer'>
        <div className='absolute bottom-0  left-[50%] translate-x-[-50%]  '>
            <div className='w-[50px] h-[50px] text-[26px] grid place-items-center rounded-lg mb-36 ml-40 '
            onClick={addProductToCart}>
                <AiOutlineHeart />
            </div>
            <div className='bg-green-600 w-[42px] h-[42px] text-[26px] grid place-items-center rounded-full mb-24 ml-40'>
            <AiOutlinePlus className="text-white"/>
            </div>
        </div>
        </div>
        <Image className='w-full h-[250px] rounded-lg' width={1000} height={1142} src={image} alt={title} />
        </div>

<div className='px- py-4'>
    <h2 className='font-medium'>{title}</h2>

    <div className='flex justify-between items-center '>
        <h2 className='font-medium text-accent text-xl'>${price}</h2>
        
        <div
        className='flex gap-2 items-center bg-pink text-white px-4 py-2 cursor-pointer hover:bg-accent'>
    </div>
    <div className='font-medium text-accent flex '><AiFillStar className="text-yellow-500 mt-1"/>&#40; {getRating()} &#41; </div>

</div>
</div>
    </div>
    </div>
  )
}

export default ProductCard