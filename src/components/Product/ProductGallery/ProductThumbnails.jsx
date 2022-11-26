import classes from './ProductGallery.module.scss';

const ProductThumbnails = ({ images, handleImageChange, activeImage }) => {
  return (
    <ul className={classes.thumbnails}>
      {images.map((image, index) => {
        const isActive = image.main === activeImage;
        return <li key={'product-' + index} className={`${isActive ? classes.active : '' }`}><img src={image.thumbnail} onClick={() => handleImageChange(index)} /></li> 
      })}  </ul>
  )
}

export default ProductThumbnails;