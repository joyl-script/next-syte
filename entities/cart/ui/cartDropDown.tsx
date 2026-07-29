'use client';

import { X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { removeItem } from '../model/cart';

interface CartDropdownProps {
  onClose: () => void;
}

export const CartDropdown = ({ onClose }: CartDropdownProps) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white shadow-xl rounded-md p-5 z-50">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Shopping Cart ({totalCount})</h3>
        <button onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-[#808080] text-sm">Корзина пуста</p>
      ) : (
        <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3">
              <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-contain" />
              <div className="flex-1">
                <p className="text-sm">{item.title}</p>
                <p className="text-sm text-[#808080]">
                  {item.quantity} x <span className="font-semibold text-black">${item.price}</span>
                </p>
              </div>
              <button onClick={() => dispatch(removeItem(item.id))}>
                <X size={16} className="text-[#808080]" />
              </button>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-[#E5E5E5]">
            <span className="text-sm">{totalCount} Product</span>
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </div>

          <button className="w-full bg-[#2C742F] text-white py-3 rounded-full mt-4 font-medium">
            Checkout
          </button>
          <button className="w-full border border-[#2C742F] text-[#2C742F] py-3 rounded-full mt-2 font-medium">
            Go To Cart
          </button>
        </>
      )}
    </div>
  );
};