import { CiDeliveryTruck } from 'react-icons/ci';
import { FaCirclePlus, FaCircleMinus } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

const onGetProductByProductName = async (productName: string) => {
  // Step-03: Fetching data ke next.api dengan menyisipkan req.url.params berupa productName
  const response = await fetch(
    `http://localhost:3000/api/product/${productName}`
  );
  const product = await response.json();

  return product?.product[0];
};

// Destructure object {params} digunakan untuk mengambil value dari [slug]
export default async function Page({
  params,
}: {
  params: { productName: string };
}) {
  // Step-01: Ambil productName dari params slug
  const { productName } = await params;

  // Step-02: Lakukan fetching dengan mengirimkan productName sebagai argument
  const product = await onGetProductByProductName(productName);

  return (
    <>
      <div className='grid grid-cols-5 mt-32 px-32 gap-10'>
        <div className='col-span-3'>
          <section>
            <div className='w-full'>
              <img
                src='https://www.lalamove.com/hubfs/furniture%20kayu%20minimalis.jpg'
                className='min-h-[400px] max-h-[400px] w-full object-cover'
              />
            </div>
            <div className='flex justify-center gap-3 py-3'>
              <div className='w-[100px]'>
                <img
                  src='https://www.lalamove.com/hubfs/furniture%20kayu%20minimalis.jpg'
                  className='min-h-[100px] max-h-[100px] w-[100px] object-cover rounded-md'
                />
              </div>
              <div className='w-[100px]'>
                <img
                  src='https://www.lalamove.com/hubfs/furniture%20kayu%20minimalis.jpg'
                  className='min-h-[100px] max-h-[100px] w-[100px] object-cover rounded-md'
                />
              </div>
              <div className='w-[100px]'>
                <img
                  src='https://www.lalamove.com/hubfs/furniture%20kayu%20minimalis.jpg'
                  className='min-h-[100px] max-h-[100px] w-[100px] object-cover rounded-md'
                />
              </div>
            </div>
          </section>
          <section className='py-10'>
            <h1 className='text-2xl font-bold'>Ulasan Pembeli</h1>
            <div className='py-3 border-t-1 border-gray-200'>
              <div className='flex justify-between items-center py-3'>
                <div>
                  <p className='text-sm font-bold'>Nama Pengguna</p>
                  <p className='text-gray-400 text-xs'>
                    Diulas pada tanggal 07-July-2025
                  </p>
                </div>
                <div className='flex items-center'>
                  <FaStar className='text-xl text-yellow-500 cursor-pointer hover:text-yellow-600 mr-1' />
                  <h1 className='text-2xl font-bold'>4</h1>
                  <h1>/5</h1>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                harum cumque aliquam, ipsum voluptatum alias inventore eos velit
                ratione tenetur officiis tempore repudiandae voluptate provident
                assumenda quaerat molestiae ad fugit?
              </p>
            </div>
          </section>
        </div>
        <div className='col-span-2'>
          <h1 className='text-3xl font-bold'>{product?.name}</h1>
          <p>{product?.dimension}</p>
          <h1 className='my-2 text-2xl font-bold'>
            Rp.{product?.price?.toLocaleString('id-ID')}
          </h1>
          <p className='text-xs text-gray-400'>
            10 orang telah membeli produk ini
          </p>
          <div className='my-3'>
            <div className='py-3 border-t-1 border-gray-200'>
              <p className='font-bold text-xs'>Stok tersedia:</p>
              <p className='text-xs'>{product?.stocks}</p>
            </div>
            <div className='py-3 border-t-1 border-gray-200'>
              <div className='flex items-center gap-1'>
                <CiDeliveryTruck className='text-2xl' />
                <p className='font-bold text-xs'>
                  Ongkir mulai dari Rp.29.500, 00.-
                </p>
              </div>
            </div>
            <div className='py-3 border-t-1 border-gray-200'>
              <div className='flex justify-between items-center'>
                <p className='text-sm'>Jumlah</p>
                <div className='flex items-center gap-2'>
                  <FaCircleMinus className='text-2xl text-green-900 cursor-pointer hover:text-yellow-500' />
                  <h1>1</h1>
                  <FaCirclePlus className='text-2xl text-green-900 cursor-pointer hover:text-yellow-500' />
                </div>
              </div>
              <button className='btn bg-yellow-500 mt-3 w-full rounded-full text-white hover:bg-yellow-600'>
                Tambahkan ke Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
