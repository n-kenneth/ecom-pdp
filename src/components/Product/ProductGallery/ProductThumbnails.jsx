import classes from './ProductGallery.module.scss';

const ProductThumbnails = ({ images, handleImageChange }) => {
  return (
    <ul className={classes.thumbnails}>
      {images.map((image, index) => <li key={'product-' + index}><img src={image.thumbnail} onClick={() => handleImageChange(index)} /></li> )}
    </ul>
  )
}

export default ProductThumbnails;