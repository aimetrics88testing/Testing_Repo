export const categories = [
  { slug: 'electronics', name: 'Electronics' },
  { slug: 'women-dresses', name: 'Women dresses' },
  { slug: 'men-dresses', name: 'Men dresses' },
  { slug: 'daily-essentials', name: 'Daily essentials' },
  { slug: 'beauty-products', name: 'Beauty products' },
  { slug: 'medicines', name: 'Medicines' },
]

export const products = [
  {
    id: 1,
    name: 'Wireless Noise-Cancel Headphones',
    price: 10799,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    price: 20699,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: 3,
    name: 'Portable Bluetooth Speaker',
    price: 4999,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 4,
    name: 'USB-C Laptop Hub',
    price: 3799,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1625843243093-fc08e2d2f0e9?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 5,
    name: 'Floral Summer Midi Dress',
    price: 5649,
    category: 'women-dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: 6,
    name: 'Elegant Evening Wrap Dress',
    price: 7649,
    category: 'women-dresses',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 7,
    name: 'Casual Linen Shirt Dress',
    price: 4549,
    category: 'women-dresses',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 8,
    name: 'Classic Tailored Blazer',
    price: 9799,
    category: 'men-dresses',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: 9,
    name: 'Oxford Button-Down Shirt',
    price: 3499,
    category: 'men-dresses',
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 10,
    name: 'Slim Fit Chino Trousers',
    price: 4599,
    category: 'men-dresses',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 11,
    name: 'Organic Hand Soap Set',
    price: 1549,
    category: 'daily-essentials',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: 12,
    name: 'Reusable Water Bottle',
    price: 1999,
    category: 'daily-essentials',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 13,
    name: 'Cotton Bath Towel Pair',
    price: 2649,
    category: 'daily-essentials',
    image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 14,
    name: 'Hydrating Face Serum',
    price: 3149,
    category: 'beauty-products',
    image: 'https://images.unsplash.com/photo-1620916565916-15b4037fad2d?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: 15,
    name: 'Matte Lip Color Kit',
    price: 2399,
    category: 'beauty-products',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 16,
    name: 'Nourishing Body Lotion',
    price: 1829,
    category: 'beauty-products',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 17,
    name: 'Paracetamol 500mg Tablets',
    price: 49,
    category: 'medicines',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
    featured: true,
  },
  {
    id: 18,
    name: 'Vitamin C Immunity Boost',
    price: 399,
    category: 'medicines',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=400&h=400&fit=crop',
    featured: false,
  },
  {
    id: 19,
    name: 'First Aid Antiseptic Cream',
    price: 179,
    category: 'medicines',
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop',
    featured: false,
  },
]

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug)
}

export function getProductsByCategory(slug) {
  return products.filter((p) => p.category === slug)
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}
