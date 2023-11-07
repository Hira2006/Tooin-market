"use client";
import { useAppSelector } from "../../redux/hooks"
import { useDispatch, useSelector } from "react-redux";
import img from "../../../public/20220217_104234.jpg"
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import Wishlist from "@/components/Wishlist";
import { BiCubeAlt, BiLeftArrow } from "react-icons/bi";
import { MdArrowForwardIos } from "react-icons/md";
import {GoPerson} from "react-icons/go"
import { AiOutlineHeart } from "react-icons/ai";
import { FiMapPin, FiSettings } from "react-icons/fi"
import { LiaCreditCardSolid } from "react-icons/lia"
import { IoMdNotificationsOutline } from "react-icons/io"

const AddToCart = () => {
    const products = useAppSelector((state) => state.cart);


    const getTotal = () => {
        let total = 0;
        products.forEach((product) => (total = total + product.price * product.quantity));
        return total;
    };

    return (
        <section className="screen-fit">
          {products.length >  0 &&(
          <>
          {/* HEADING AND PARAGRAPH START */}
           <div className="mt-8 md:mt-0 flex">
          <button className="rounded-full border-gray-500 border-2 flex lg:py-2 px-4 mb-12 mt-4 ml-24"><BiLeftArrow className="text-black mt-1 pr-1"/><Link href={"/"}>Go Home</Link></button>
          <div className="ml-[80ch] flex gap-x-2 mt-6">
          <p className="hidden lg:block">Home</p><MdArrowForwardIos className="mt-1 hidden lg:block"/><p className="hidden lg:block"> Profile </p><MdArrowForwardIos className="mt-1 hidden lg:block"/> <p className="text-gray-400 hidden lg:block"> Wishlist</p></div>
          </div>

            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ml-24">
              My Wishlist
            </div>
          <div className="flex">
            <div>
         
            <div className="bg-gray-100 w-56 h-[72vh] ml-24 mb-8  hidden lg:block">
              <div className="flex">
                <Image src={img} alt="img" className="rounded-full w-20 h-20 p-4" />
                <div>
                <h1 className="text-md pl-2 pt-4">Hello </h1>
                <h2 className="text-lg font-bold pl-2">Hira Urooj</h2></div>
                </div>
 <div className='flex-1 h-[1px] bg-gray-400 mb-4' />
 <div>
 <ul className=' gap-x-2 px-2'>
    <li className="p-2  cursor-pointer hover:bg-green-500 flex"><GoPerson className="mt-1  mr-2"/> Personal Information</li>
    <li className="p-2 cursor-pointer hover:bg-green-500 flex"><BiCubeAlt className="mt-1 mr-2" />My Orders</li>
    <li className="p-2 cursor-pointer hover:bg-green-500 flex "><AiOutlineHeart className="mt-1  mr-2" />My Wishlist</li>
    <li className="p-2 cursor-pointer hover:bg-green-500 flex"><FiMapPin className="mt-1  mr-2" />Manage Addresses</li>
    <li className="p-2 cursor-pointer hover:bg-green-500 flex"><LiaCreditCardSolid className="mt-1  mr-2" />Saved Cards</li>
    <li className="p-2 cursor-pointer hover:bg-green-500 flex"><IoMdNotificationsOutline className="mt-1  mr-2" />Notification</li>
    <li className="p-2 cursor-pointer hover:bg-green-500 flex"><FiSettings className="mt-1  mr-2" />Settings</li>
  </ul>
 </div>
            </div>
            </div>
            
            
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className='flex flex-col lg:flex-row gap-12 lg:ml-12 '>
            {/* CART ITEMS START */}
            <div className='flex-[2]'>
            <div className='grid gap-6  lg:grid-cols-3 '>
             {products?.map((products: any) => {
            return (
              <Wishlist key={products.id} 
              id={products.id} 
              image={products.image }
              title={products.title} 
              price={products.price}
              category={products.category} 
              sale={products.sale}
              range={products.range}
              rating={products.rating}
              sortby={products.sortby}
              />
            );
          })}
          </div>
            </div>
            </div>
            </div>
          </>
              )}



          
          {products.length < 1 && <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
          <Image 
                src="/empty-cart.jpg" 
                alt="img"
                width={300}
                height={300}
                className='w-[300px] md:w-[400px] '
                />
                <span className='txt-xl font-bold'>
                  Your Wishlist is empty
                </span>
                <span className='text-center mt-4'>
                  Looks like you have not added anything in your wishlist.
                  <br />
                  Go ahead and explore top categories.
                </span>
                <Link 
                href="/"
                className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
                >
                Continue Shopping
                </Link>
            </div>}
          </section>
              )}   

export default AddToCart;
