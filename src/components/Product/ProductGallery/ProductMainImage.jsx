import classes from './ProductGallery.module.scss';

import NextIcon from '../../../assets/icon-next.svg';
import PrevIcon from '../../../assets/icon-previous.svg';

const ProductMainImage = ({ isMobile, image, onNextImage, onPrevImage }) => (
  <div className={classes['main-image']}>
    <img src={image} />
    { isMobile && <>
      <div className={classes.next} onClick={onNextImage}><img src={NextIcon} /></div>
      <div className={classes.prev} onClick={onPrevImage}><img src={PrevIcon} /></div>
    </> }
  </div>
)

export default ProductMainImage;