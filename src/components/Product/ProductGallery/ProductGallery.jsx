import { useContext, useEffect, useState } from "react";

import ProductMainImage from "./ProductMainImage";
import ProductThumbnails from "./ProductThumbnails";
import WindowContext from '../../../context/WindowContext';

import classes from './ProductGallery.module.scss';

const ProductGallery = ({ images }) => {

  const [activeImage, setActiveImage] = useState(images[0].main);

  const { isMobile } = useContext(WindowContext);

  useEffect(() => {
    images.map(image => {
      new Image().src = image.main;
      new Image().src = image.thumbnail;
    })
  }, []);

  const handleImageChange = (index) => {
    const { main } = images[index];
    setActiveImage(main);
  }


  return (
    <div className={classes.gallery}>
      <ProductMainImage image={activeImage} />
      { !isMobile && <ProductThumbnails images={images} handleImageChange={handleImageChange} /> }
    </div>
  );
}

export default ProductGallery;