import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Greg',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Pawan',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1',
      name: 'Desktop One',
      slug: 'Desktop-one',
      category: 'Desktop',
      image: '/images/desktop1.jpg', // 679px × 829px
      price: 1200,
      countInStock: 10,
      brand: 'Philips',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality desktop computer',
    },
    {
      //_id: '2',
      name: 'Desktop Two',
      slug: 'Desktop-two',
      category: 'Desktop',
      image: '/images/desktop2.jpg', // 679px × 829px
      price: 1250,
      countInStock: 0,
      brand: 'Philips',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality desktop computer',
    },
    {
      //_id: '3',
      name: 'Laptop One',
      slug: 'laptop-one',
      category: 'Laptops',
      image: '/images/laptop1.jpg',
      price: 2500,
      countInStock: 15,
      brand: 'Lenovo',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality laptop',
    },
    {
      //_id: '4',
      name: 'laptop Two',
      slug: 'laptop-two',
      category: 'Laptops',
      image: '/images/laptop2.jpg',
      price: 1165,
      countInStock: 5,
      brand: 'dell',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality and best selling laptop',
    },
    {
      //_id: '5',
      name: 'Desktop Five',
      slug: 'Desktop-five',
      category: 'Desktop',
      image: '/images/desktop1.jpg', // 679px × 829px
      price: 1200,
      countInStock: 10,
      brand: 'Philips',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality desktop computer',
    },
    {
      //_id: '6',
      name: 'Desktop Six',
      slug: 'Desktop-six',
      category: 'Desktop',
      image: '/images/desktop2.jpg', // 679px × 829px
      price: 1250,
      countInStock: 0,
      brand: 'Philips',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality desktop computer',
    },
  ],
};
export default data;
