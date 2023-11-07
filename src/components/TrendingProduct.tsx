"use client"
import React,{useState, useEffect} from 'react'
import Image, {StaticImageData} from 'next/image';
import { Data } from "@/utils/productData"
import ProductCard from "../components/ProductCard"
import { IProduct } from "../components/ProductCard"
import img from "../../public/20220217_104234.jpg"
import { MdArrowForwardIos } from 'react-icons/md';
import { BiCubeAlt, BiLeftArrow } from 'react-icons/bi';
import { GoPerson } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMapPin, FiSettings } from 'react-icons/fi';
import { LiaCreditCardSolid } from 'react-icons/lia';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { useAppSelector } from '@/redux/hooks';
import Link from "next/link"

const TrendingProduct = () => {
  const [data, setData] = useState([]);
  const cartCount = useAppSelector((state) => state.cart.length);


  const shuffleArray = (array: any) => {
    return array 
    .map((value:any) => ({value, sort: Math.random() }))
    .sort((a: any, b:any) => a.sort - b.sort)
    .map(({ value}: any) => value);
  };

  useEffect(() => {
    setData(shuffleArray(Data).slice(0, 15))
  }, [])

  return (
    <div className='container mt-32'>
         <div className="mt-8 md:mt-0 flex">
          <div className="flex  ">
            <div>
         
            <div className="bg-gray-100 w-56 h-[72vh] ml-24 mb-8 hidden lg:block">
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
    <li className="p-2 cursor-pointer hover:bg-green-500 flex "><AiOutlineHeart className="mt-1  mr-2" /><Link href={"/wishlist"}>My Wishlist &#40;{cartCount}&#41;</Link></li>
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
          <div className='flex flex-col lg:flex-row gap-12 ml-12 '>
            {/* CART ITEMS START */}
            <div className='flex-[2]'>
            <div className='grid gap-6  lg:grid-cols-3 '>
             {data?.map((products: any) => {
            return (
              <ProductCard key={products.id} 
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
  </div>
  </div>
  )
}
export default TrendingProduct;