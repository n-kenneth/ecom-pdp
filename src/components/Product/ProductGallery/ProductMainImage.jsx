import classes from './ProductGallery.module.scss';

const ProductMainImage = ({ image }) => (
  <div className={classes['main-image']}>
    <img src={image} />
  </div>
)

export default ProductMainImage;