'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
type TProducts = {
  id: number;
  name: string;
  price: number;
};
export default function Page() {
  const [products, setProducts] = useState<[] | TProducts[]>([]);
  const onGetProducts = async () => {
    const response = await axios.get('http://localhost:3000/api/products');

    setProducts(response?.data?.products);
  };

  //   componentDidMount
  useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <>
      <h1 className='font-bold text-3xl'>Client Side Rendering (CSR)</h1>
      <ul>
        {products.map((product: TProducts, index: number) => {
          return <li key={index}>{product?.name}</li>;
        })}
      </ul>
    </>
  );
}
