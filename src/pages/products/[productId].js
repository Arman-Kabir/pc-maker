import RootLayout from "@/components/layouts/RootLayout";
import { Card, Col,  Row } from "antd";

import Image from "next/image";
import { useRouter } from "next/router";
// import fetch from 'node-fetch';

const ProductDetail = ({ product }) => {
    const router = useRouter();
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Image src={product.image} width={500} height={500} alt="product-image"></Image>
                </Col>

                <Col span={12}>
                    
                </Col>


            </Row>
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

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    // const res = await fetch("http://localhost:5000/products");
    const products = await res.json();

    const paths = products?.data?.map((product) => ({
        params: { productId: product?.id.toString() }
    }))
    return { paths, fallback: true }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const productId = params?.productId;
    const res = await fetch(`http://localhost:3000/api/products/${productId}`);
    // const res = await fetch(`http://localhost:5000/products/${productId}`);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            product: data.data,
        },
    }
}

