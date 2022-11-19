import ProductImage1 from '../../assets/image-product-1.jpg';
import ProductImage1Thumbnail from '../../assets/image-product-1-thumbnail.jpg';
import ProductImage2 from '../../assets/image-product-2.jpg';
import ProductImage2Thumbnail from '../../assets/image-product-2-thumbnail.jpg';
import ProductImage3 from '../../assets/image-product-3.jpg';
import ProductImage3Thumbnail from '../../assets/image-product-3-thumbnail.jpg';
import ProductImage4 from '../../assets/image-product-4.jpg';
import ProductImage4Thumbnail from '../../assets/image-product-4-thumbnail.jpg';

export const product = {
  id: 1,
  brand: 'Sneaker Company',
  title: "Fall Limited Edition Sneakers",
  description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  price: {
    original_price: 250.00,
    sale_price: 125.00
  },
  stock: 20,
  featured_image: ProductImage1,
  images: [
    {
      main: ProductImage1,
      thumbnail: ProductImage1Thumbnail
    },
    {
      main: ProductImage2,
      thumbnail: ProductImage2Thumbnail
    },
    {
      main: ProductImage3,
      thumbnail: ProductImage3Thumbnail
    },
    {
      main: ProductImage4,
      thumbnail: ProductImage4Thumbnail
    }
  ]
}