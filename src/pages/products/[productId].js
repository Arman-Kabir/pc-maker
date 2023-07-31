import { useRouter } from "next/router";

const ProductDetail = () => {
    const router = useRouter();
  return (
    <div>ProductDetail: {router.query.productId}</div>
  )
}

export default ProductDetail;