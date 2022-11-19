import classes from './Product.module.scss';
import ProductForm from './ProductForm';

const ProductInfo = ({ product, onSubmit }) => {
	const { brand, title, description, price } = product;
	const {sale_price, original_price } = price;

	return (
		<div className={classes.container}>
			<div className={classes.brand}>{brand}</div>
			<div className={classes.title}>{title}</div>
			<div className={classes.description}>{description}</div>
			<div className={classes.priceContainer}>
				{sale_price && <div className={classes.salePrice}><div className={classes.price}>${sale_price.toFixed(2)}</div> <span className={classes.salePercent}>{sale_price / original_price * 100}%</span></div>}
				<div className={classes.originalPrice}>
					<span className={classes.price}>${original_price.toFixed(2)}</span>
				</div>
			</div>
			<ProductForm product={product} onSubmit={onSubmit} />
		</div>
	);
}

export default ProductInfo;