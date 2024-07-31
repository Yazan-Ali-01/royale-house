import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
// utils/fetchProducts.js

// Utility to validate URL
const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products', {
      next: { revalidate: 60, cache: 'force-cache' }, // t seems that the issue with fetch revalidation in Next.js 14.0.0 and later versions is a known problem. revalidation with the fetch API using revalidateTag and revalidatePath sometimes doesn't work as expected. 
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    let products = await response.json();

    products = products.map(product => {
      // Validate images array
      const validImages = product.images.filter(isValidURL);

      return {
        ...product,
        images: validImages.length > 0 ? validImages : ['https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png'], // Provide a default placeholder image if none are valid
        oldPrice: product.price + Math.floor(Math.random() * 100) + 10,
        discount: Math.floor(Math.random() * 50),
        rating: (Math.random() * 2 + 3).toFixed(1),
        numberOfRaters: (Math.random() * 40 + 3).toFixed(1),
      };
    });
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories', {
      next: { revalidate: 60, cache: 'force-cache' },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
};