import { useState } from "react";
import ProductGallery from "./ProductGallery/ProductGallery"
import ProductInfo from "./ProductInfo";

import { product } from "../utilities/product";

import classes from './Product.module.scss';
import Modal from "../Modal/Modal";

const Product = () => {
  const [showLightbox, setShowLightbox] = useState(false);

  const handleOpenLightbox = () => {
    setShowLightbox(true);
  }

  const handleCloseLightbox = () => {
    setShowLightbox(false);
  }


  return <div className={classes.mainProduct}>
    <ProductGallery images={product.images} open={handleOpenLightbox} />
    <ProductInfo product={product} />
    {showLightbox && 
    <Modal onClose={handleCloseLightbox}>
      <ProductGallery images={product.images} isPopup={true} />
    </Modal> }
  </div>
}

export default Product;