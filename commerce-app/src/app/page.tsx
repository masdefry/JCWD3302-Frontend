'use client';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import { TbClock24 } from 'react-icons/tb';
import { TbShoppingBagHeart } from 'react-icons/tb';
import { GoArrowRight } from 'react-icons/go';
import { HiShoppingCart } from 'react-icons/hi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);

  const onGetProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/product');
      setProducts(response?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <>
      {/* Banner */}
      <section>
        <img src='https://www.ikea.com/global/en/images/PH_202780_d8dc65c792.jpg?f=g' />
      </section>

      {/* Services */}
      <section className='grid grid-cols-5 gap-20 px-32 py-20'>
        <div className='border-3 border-yellow-500 rounded-xl px-5 py-10'>
          <div className='p-3 bg-yellow-500 rounded-full w-fit text-white'>
            <MdOutlineDeliveryDining className='text-5xl' />
          </div>
          <h1 className='text-2xl font-bold mt-3'>Fast & Free Shipping</h1>
        </div>
        <div className='border-3 border-yellow-500 rounded-xl px-5 py-10'>
          <div className='p-3 bg-yellow-500 rounded-full w-fit text-white'>
            <BsBoxSeam className='text-5xl' />
          </div>
          <h1 className='text-2xl font-bold mt-3'>100% Guarantee</h1>
        </div>
        <div className='border-3 border-yellow-500 rounded-xl px-5 py-10'>
          <div className='p-3 bg-yellow-500 rounded-full w-fit text-white'>
            <TbClock24 className='text-5xl' />
          </div>
          <h1 className='text-2xl font-bold mt-3'>24 / 7 Full Supports</h1>
        </div>
        <div className='border-3 border-yellow-500 rounded-xl px-5 py-10'>
          <div className='p-3 bg-yellow-500 rounded-full w-fit text-white'>
            <TbShoppingBagHeart className='text-5xl' />
          </div>
          <h1 className='text-2xl font-bold mt-3'>Easy to Shop</h1>
        </div>
        <div className='border-3 border-yellow-500 rounded-xl px-5 py-10'>
          <div className='p-3 bg-yellow-500 rounded-full w-fit text-white'>
            <TbClock24 className='text-5xl' />
          </div>
          <h1 className='text-2xl font-bold mt-3'>24 / 7 Full Supports</h1>
        </div>
      </section>

      {/* Product List */}
      <section className='px-32 py-10'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold text-green-900'>
            It`s products for you!
          </h1>
          <button className='ml-auto btn bg-yellow-500 text-white rounded-full'>
            View all <GoArrowRight />
          </button>
        </div>
        {/* Card List */}
        <div className='grid grid-cols-3 mt-6 gap-3'>
          {products?.map((product, index) => {
            return (
              <div key={index}>
                {/* Card Item */}
                <div className='border border-gray-300 rounded-lg px-3 py-3 col-span-1 h-fit'>
                  <div className='h-[300px] bg-red-100 relative'>
                    <img
                      src='https://d2xjmi1k71iy2m.cloudfront.net/dairyfarm/id/images/615/1161538_PE889459_S4.webp'
                      className='w-full h-full object-cover rounded-lg'
                    />
                  </div>
                  <div>
                    <div className='py-5 flex items-center'>
                      <div className='max-w-[300px]'>
                        <Link href={`/product/detail/${product?.name}`}>
                          <h1 className='text-lg font-bold text-gray-700 line-clamp-2'>
                            {product?.name}
                          </h1>
                        </Link>
                        <p className='text-xl text-gray-700'>
                          Rp.{product?.price}
                        </p>
                      </div>
                      <button className='w-10 h-10 bg-green-900 ml-auto rounded-full flex items-center justify-center hover:bg-yellow-500 hover:cursor-pointer'>
                        <HiShoppingCart className='text-2xl text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
