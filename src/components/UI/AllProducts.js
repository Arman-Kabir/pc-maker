import { Button, Card, Col, Row, Space } from 'antd';
import Image from 'next/image';
import React from 'react';
const { Meta } = Card;

const AllProducts = ({ products }) => {
    console.log(products);
    return (
        <div>
            <h1 style={{ fontSize: '36px', textAlign: 'center', fontWeight: 'bold' }}>Featured Products</h1>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {
                    products.map((product) => (
                        <Col key={product.id} span={8}>
                            <Card bordered={true} hoverable>
                                <h1 style={{ textAlign: 'center' }}>{product?.name}</h1>
                                <Space style={{ display: 'flex', justifyContent: "center" }}>
                                    <Image style={{}} src={product?.image} alt='' width={200} height={200}></Image>
                                </Space>

                                <Space style={{ display: 'flex', justifyContent: 'center' }}>
                                    <h1 style={{ color: 'crimson' }}>{product?.price}</h1>
                                    <p>{product?.status}</p>
                                </Space>
                                <p>{product?.description?.length > 100 ? product.description.slice(0, 100) + '......'  : product.description}
                                </p>
                            </Card>
                        </Col>
                    ))
                }

            </Row>
        </div>
    )
};

export default AllProducts