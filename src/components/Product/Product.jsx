import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo";

import { product } from "../utilities/product";

import classes from './Product.module.scss';

const Product = () => {
  return <div className={classes.mainProduct}>
    <ProductGallery images={product.images} />
    <ProductInfo product={product} />
  </div>
}

export default Product;