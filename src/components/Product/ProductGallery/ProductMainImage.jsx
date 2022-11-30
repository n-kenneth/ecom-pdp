import classes from './ProductGallery.module.scss';

import NextIcon from '../../../assets/icon-next.svg';
import PrevIcon from '../../../assets/icon-previous.svg';

const ProductMainImage = ({ isMobile, image, onNextImage, onPrevImage, open, isPopup }) => (
  <div className={isPopup ? `${classes['main-image']} ${classes['main-popup']}` : classes['main-image']} onClick={open}>
    <img src={image} />
    { (isMobile || isPopup) ?  <>
      <div className={classes.next} onClick={onNextImage}><img src={NextIcon} /></div>
      <div className={classes.prev} onClick={onPrevImage}><img src={PrevIcon} /></div>
    </> : null }
  </div>
)

export default ProductMainImage;