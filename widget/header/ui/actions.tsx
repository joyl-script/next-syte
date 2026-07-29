import { CiHeart } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";
import { useAppSelector } from '@/shared/lib/hooks';
import { useState } from "react";
import { CartDropdown } from "@/entities/cart/ui/cartDropDown";

export const Action = () => {
  const items = useAppSelector((state) => state.cart.items);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex gap-4 items-center relative">
      <CiHeart size={32} />
      <div className="border-r border-[#CCCCCC]" />
      <div className="relative">
        <button className="cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)}>
          <FaBasketShopping size={28} />
        </button>
        {totalCount > 0 && (
          <span className="cursor-pointer absolute -top-2 -right-2 bg-[#2C742F] text-white border-2 border-white text-xs rounded-full w-4 h-4 flex items-center justify-center p-2.5">
            {totalCount}
          </span>
        )}
      </div>
      {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};