import type { Product } from '~/app/entities/product/model/types'

export const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling wireless headphones with 30-hour battery life. Perfect for music lovers and professionals.',
    price: 129.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    title: 'Smart Watch Pro',
    description: 'Advanced fitness tracking smartwatch with heart rate monitor, GPS, and 7-day battery life.',
    price: 249.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800'],
    inStock: true,
    rating: 4.7
  },
  {
    id: 3,
    title: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 360-degree sound and 12-hour playtime.',
    price: 79.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 4,
    title: 'Classic Cotton T-Shirt',
    description: 'Comfortable 100% organic cotton t-shirt. Available in multiple colors.',
    price: 24.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800', 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800'],
    inStock: true,
    rating: 4.2
  },
  {
    id: 5,
    title: 'Denim Jeans',
    description: 'Classic fit denim jeans with stretch comfort. Durable and stylish.',
    price: 59.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1542272604-787c3835535d?w=800'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 6,
    title: 'Winter Jacket',
    description: 'Warm insulated winter jacket with water-resistant exterior.',
    price: 149.99,
    category: 'clothing',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800', 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800'],
    inStock: true,
    rating: 4.6
  },
  {
    id: 7,
    title: 'Indoor Plant Set',
    description: 'Collection of 3 easy-care indoor plants perfect for home or office.',
    price: 39.99,
    category: 'home-garden',
    images: ['https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 8,
    title: 'Ceramic Dinner Set',
    description: '16-piece ceramic dinner set including plates, bowls, and mugs.',
    price: 89.99,
    category: 'home-garden',
    images: ['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800'],
    inStock: false,
    rating: 4.1
  },
  {
    id: 9,
    title: 'LED Desk Lamp',
    description: 'Adjustable LED desk lamp with touch control and USB charging port.',
    price: 34.99,
    category: 'home-garden',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800'],
    inStock: true,
    rating: 4.3
  },
  {
    id: 10,
    title: 'Yoga Mat',
    description: 'Premium non-slip yoga mat with carrying strap. 6mm thickness.',
    price: 29.99,
    category: 'sports-outdoors',
    images: ['https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800', 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800'],
    inStock: true,
    rating: 4.7
  },
  {
    id: 11,
    title: 'Camping Tent 4-Person',
    description: 'Waterproof 4-person camping tent with easy setup. Perfect for outdoor adventures.',
    price: 159.99,
    category: 'sports-outdoors',
    images: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800'],
    inStock: true,
    rating: 4.5
  },
  {
    id: 12,
    title: 'Mountain Bike',
    description: '21-speed mountain bike with dual suspension and disc brakes.',
    price: 399.99,
    category: 'sports-outdoors',
    images: ['https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800', 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800'],
    inStock: true,
    rating: 4.8
  },
  {
    id: 13,
    title: '4K Action Camera',
    description: 'Waterproof 4K action camera with image stabilization and WiFi connectivity.',
    price: 199.99,
    category: 'electronics',
    images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800'],
    inStock: true,
    rating: 4.6
  },
  {
    id: 14,
    title: 'Running Shoes',
    description: 'Lightweight running shoes with cushioned sole and breathable mesh.',
    price: 84.99,
    category: 'sports-outdoors',
    images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800', 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800'],
    inStock: true,
    rating: 4.4
  },
  {
    id: 15,
    title: 'Coffee Maker',
    description: 'Programmable coffee maker with 12-cup capacity and auto-shutoff.',
    price: 69.99,
    category: 'home-garden',
    images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800'],
    inStock: true,
    rating: 4.2
  }
]
