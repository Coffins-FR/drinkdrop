import { useCartState } from "../context/cart";
import { useModalDispatch } from "../context/modal";

function CartSummary() {
  const { total_unique_items } = useCartState();
  const { openModal } = useModalDispatch();

  return (
    <button className="appearance-none focus:outline-none" onClick={openModal}>
      <span class="relative inline-block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        <span class="absolute h-4 w-4 top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{total_unique_items}</span>
      </span>
    </button>
  );
}

export default CartSummary;
