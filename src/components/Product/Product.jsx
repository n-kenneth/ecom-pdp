import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo";

import { product } from "../utilities/product";

import classes from './Product.module.scss';
import { useCallback, useContext } from "react";
import CartContext from "../../context/CartContext";

const Product = () => {
  console.log('product created');
  const cartCtx = useContext(CartContext);

  const handleSubmit = useCallback( event => {
    console.log(event)
    event.preventDefault();
		console.log(product.id);
		cartCtx.add({
			...product,
			quantity: 1
		})
  });

  return <div className={classes.mainProduct}>
   
    <ProductGallery images={product.images} />
    <ProductInfo product={product} onSubmit={handleSubmit} />
  </div>
}

export default Product;