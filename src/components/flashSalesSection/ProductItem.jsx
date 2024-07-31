import Image from 'next/image';
import { FiEye, FiHeart } from 'react-icons/fi';

const ProductItem = ({ product }) => {
  return (
    <div className="bg-white rounded-lg w-48 flex-shrink-0 relative group overflow-hidden">
      <Image
        src={product.images[0]}
        alt={product.title}
        width={200}
        height={200}
        className="w-full h-auto rounded-t-lg"
      />
      <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
        -{product.discount}%
      </div>
      <div className="absolute top-3 right-3 flex flex-col space-y-2">
        <button className="bg-white p-1 rounded-full shadow">
          <FiHeart />
        </button>
        <button className="bg-white p-1 rounded-full shadow">
          <FiEye />
        </button>
      </div>
      <div className="flex justify-start mt-2 gap-2">
        <span className="text-red-500">${product.price}</span>
        <span className="text-gray-500 line-through">${product.oldPrice}</span>
      </div>
      <h3 className="mt-2 text-sm font-medium h-12 overflow-hidden text-ellipsis">
        {product.title}
      </h3>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{'★'.repeat(product.rating)}</span>
        <span className="text-gray-500 ml-2">({product.numberOfRaters})</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transition-transform transform translate-y-full group-hover:translate-y-0">
        <button className="w-full">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
