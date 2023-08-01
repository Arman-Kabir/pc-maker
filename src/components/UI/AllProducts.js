import { addComponent } from '@/redux/api/componentsSlice';
import { Button, Card, Col, Row, Space } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
const { Meta } = Card;

const AllProducts = ({ products, children }) => {
    const components = useSelector((state) => state.components.components);
    const dispatch = useDispatch();

    const handleAddComponent=(component)=>{
        // dispatch(addComponent(component));
    }
    // console.log(products);
    return (
        <div>
            <h1 style={{ fontSize: '36px', textAlign: 'center', fontWeight: 'bold' }}>Featured Products</h1>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    products.map((product) => (
                        <Col key={product.id} span={8}>

                            <Link href={`/products/${product?.id}`} style={{ color: 'none' }}>
                                <Card bordered={true} hoverable style={{ color: 'black' }}>
                                    <h1 style={{ textAlign: 'center' }}>{product?.name}</h1>
                                    <Space style={{ display: 'flex', justifyContent: "center" }}>
                                        <Image style={{}} src={product?.image} alt='' width={200} height={200}></Image>
                                    </Space>

                                    <Space style={{ display: 'flex', justifyContent: 'space-between', margin: '0 100px' }}>
                                        <p>{product?.category}</p>
                                        <h1 style={{ color: 'crimson' }}>{product?.price}</h1>
                                        <p>{product?.status}</p>
                                    </Space>
                                    <p>{product?.description?.length > 100 ? product.description.slice(0, 100) + '......' : product.description}
                                    </p>

                                </Card>
                            </Link>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {
                                    // handleAddComponent(product)
                                    // href="/pc-builder" 
                                    children && <Button onClick={() =>dispatch(addComponent(product))} type="primary">Add to Builder</Button>
                                }
                            </div>

                        </Col>
                    ))
                }

            </Row>


        </div >
    )
};

export default AllProducts