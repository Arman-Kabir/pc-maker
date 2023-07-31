import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";

const ProductDetail = ({ product }) => {
    const router = useRouter();
    return (
        <div>
            <div>ProductDetail: {router.query.productId}</div>
            <div>Name {product?.name}</div>
        </div>
    )
}

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
};

export const getStaticPaths = async()=>{
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    const paths = products.map((product)=>({
        params:{productId:product.id}
    }))

    return {paths,fallback:false}
}

export const getStaticProps = async (context) => {
    const {params} = context;
    const res = await fetch(`http://localhost:5000/products/${params.productId}`);
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    }
}