import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";
import fetch from 'node-fetch';

const ProductDetail = ({ product }) => {
    const router = useRouter();
    return (
        <div>
            <div>ProductDetail: {router?.query?.productId}</div>
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
    const res = await fetch("http://localhost:3000/api/products");
    const products = await res.json();

    const paths = products?.data?.map((product)=>({
        params:{productId:product?.id.toString()}
    }))
    return {paths,fallback:true}
}

export const getStaticProps = async (context) => {
    const {params} = context;
    const productId = params?.productId;
    const res = await fetch(`http://localhost:3000/api/products/${productId}`);
    const data = await res.json();
    return {
        props: {
            product: data,
        },
    }
}

