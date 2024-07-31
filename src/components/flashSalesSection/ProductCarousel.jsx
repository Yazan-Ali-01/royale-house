import { fetchProducts } from '@/lib/utils';
import ProductItem from './ProductItem';
import { MdOutlineWatchLater } from "react-icons/md";

const ProductCarousel = async ({ searchParams }) => {
  const selectedCategory = searchParams.category;
  const products = await fetchProducts();

  // Filter products by the selected category
  let filteredProducts = [];
  if (selectedCategory) {
    filteredProducts = products.filter(product => product.category.name === selectedCategory);
  } else { 
    filteredProducts = products;
  }

  return (
    <div className="flex space-x-4 overflow-x-auto py-4 hide-scrollbar">
      {filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-32 text-gray-500">
          <span className='mx-2'>No products available for this category.</span> <MdOutlineWatchLater size={20}/>
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
