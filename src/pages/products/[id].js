import RootLayout from "@/components/layouts/RootLayout";
import { Badge, Card, Col, Image, Row, Tag } from "antd";
import { useRouter } from "next/router";

const ProductDetail = ({ product }) => {
    // console.log(product);
    // const router = useRouter();
    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Image src={product?.image} width={500} height={500} alt="product-image"></Image>
                </Col>

                <Col span={12}>
                    <Card style={{ margin: '50px 0px' }} hoverable>
                        <h3 >{product?.name}</h3>

                        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '25px' }}>
                            <Tag color="red">Price: <span style={{ fontWeight: 'bold' }}>{product?.price}</span></Tag>
                            <Tag color="cyan">Category: <span style={{ fontWeight: 'bold' }}>{product?.category}</span></Tag>
                            <Tag color="blue">Status:<span style={{ fontWeight: 'bold' }}> {product?.status}</span></Tag>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Badge count={product?.rating}><Tag color='warning'>Rating</Tag></Badge>
                            <Badge count={product['individual-rating']}><Tag color='warning'>Individual Rating</Tag></Badge>
                            <Badge count={product['average rating']}><Tag color='warning'>Average Rating</Tag></Badge>

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px 0px' }}>
                            <h3 style={{ margin: '0', color: 'navyblue' }}>Reviews</h3>
                            {
                                product?.reviews?.map((review) => (
                                    <p style={{ margin: '0' }} key={review}>{review}</p>
                                ))
                            }
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '25px 0px' }}>
                            <h3 style={{ margin: '0', color: 'navyblue' }}>Key Features</h3>
                            {
                                product['key-features']
                                    .map((features) => (
                                        <p style={{ margin: '0' }} key={features}>{features}</p>
                                    ))
                            }
                        </div>
                    </Card>

                </Col>
            </Row>
        </div >
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
    // const res = await fetch("https://pc-maker-backend.vercel.app/products");
    const res = await fetch("https://pc-maker-backend.onrender.com/products");
    const products = await res.json();
    // console.log(products);

    const paths = products?.map((product) => ({
        params: { id: product?.id }
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { id } = context?.params;
    // const res = await fetch(`https://pc-maker-backend.vercel.app/products/${id}`);
    const res = await fetch(`https://pc-maker-backend.onrender.com/products/${id}`);
    const data = await res.json();
    // console.log(data);
    return {
        props: {
            product: data,
        },
    }
}

