type TProducts = {
  id: number;
  name: string;
  price: number;
};

export interface IGetProductsResponse {
  products: TProducts[];
}

const onGetProducts = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error('We couldn`t load the data');
  }

  const products: IGetProductsResponse = await response.json(); // Convert response json > response js object

  return products?.products;
};

export default async function Page() {
  const products = await onGetProducts();
  return (
    <>
      <h1 className='font-bold text-3xl'>Static Site Generator (SSG)</h1>
      <ul>
        {products.map((product: TProducts, index: number) => {
          return <li key={index}>{product?.name}</li>;
        })}
      </ul>
    </>
  );
}
