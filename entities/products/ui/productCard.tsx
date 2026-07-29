import { Product } from '../model/types';
import { CiHeart } from "react-icons/ci";
import { Button } from '@/shared/ui/button/button';
import { FaBasketShopping } from "react-icons/fa6";
import { useAppDispatch } from '@/shared/lib/hooks';
import Image from 'next/image';
import { addItem } from '@/entities/cart/model/cart';

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {

  const dispatch = useAppDispatch()

  return (
    <div className='flex items-end-safe  group relative border-2 border-[#E5E5E5] w-fit p-3 hover:border-[#2C742F] transition-colors duration-300 ease-in-out'>
      <div>
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={200}
          height={200}
        />

        <button
          className="absolute right-3 top-3 rounded-full bg-white p-2 opacity-0 shadow
            transition-opacity duration-200 group-hover:opacity-100"
        >
          <CiHeart />
        </button>
        <p className='text-[#4D4D4D]'>{product.title}</p>
        <p className='text-[#1A1A1A] font-bold'>${product.price}</p>
      </div>
      <div>
        <Button variant='icon' onClick={() => dispatch(addItem(product))}>
          <FaBasketShopping />
        </Button>
      </div>
    </div>
  )

}