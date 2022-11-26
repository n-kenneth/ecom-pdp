import { useContext, useEffect, useState } from "react";

import ProductMainImage from "./ProductMainImage";
import ProductThumbnails from "./ProductThumbnails";
import WindowContext from '../../../context/WindowContext';

import classes from './ProductGallery.module.scss';

const ProductGallery = ({ images, open }) => {

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

  const onNextImageHandle = () => {
    const activeImageIndex = images.findIndex(image => image.main === activeImage);
    const nextImage = activeImageIndex === images.length - 1  ? images[0].main : images[activeImageIndex + 1].main;
    setActiveImage(nextImage);
  }

  const onPrevImageHandle = () => {
    const activeImageIndex = images.findIndex(image => image.main === activeImage);
    const nextImage = activeImageIndex === 0 ? images[images.length - 1].main : images[activeImageIndex - 1].main;
    setActiveImage(nextImage);
  }


  return (
    <div className={classes.gallery}>
      <ProductMainImage 
        isMobile={isMobile}
        image={activeImage} 
        open={open}
        onNextImage={onNextImageHandle} 
        onPrevImage={onPrevImageHandle} />
      { !isMobile && <ProductThumbnails 
      images={images}
      handleImageChange={handleImageChange}
      activeImage={activeImage}
      /> }
    </div>
  );
}

export default ProductGallery;