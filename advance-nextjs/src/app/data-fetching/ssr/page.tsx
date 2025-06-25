type TProducts = {
  id: number;
  name: string;
  price: number;
};

export interface IGetProductsResponse {
  products: TProducts[];
}

const onGetProducts = async () => {
  const response = await fetch('http://localhost:3000/api/products', {
    cache: 'no-store',
  });

  const products: IGetProductsResponse = await response.json(); // Convert response json > response js object

  return products?.products;
};

export default async function Page() {
  const products = await onGetProducts();
  return (
    <>
      <h1 className='font-bold text-3xl'>Server Side Rendering (SSR)</h1>
      <ul>
        {products.map((product: TProducts, index: number) => {
            return(
                <li key={index}>{product?.name}</li>
            )
        })}
      </ul>
    </>
  );
}
