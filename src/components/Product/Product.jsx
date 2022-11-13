import ProductGallery from "./ProductGallery/ProductGallery"
import { productImages } from "../utilities/images";

const Product = () => {
  return <div>
    <ProductGallery images={productImages} />
  </div>
}

export default Product;