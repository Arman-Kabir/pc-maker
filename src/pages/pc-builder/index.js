
import RootLayout from '@/components/layouts/RootLayout'
import { Button, Card, Col, Image, Row, Space, Tag } from 'antd'



import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux';

const categoryCardStyle = {
    height: '50px',
    margin: '5px 0px',
    // backgroundColor:'black',
    // color:'white',
    // borderColor: 'crimson',
    display: 'flex',
    alignItems: 'center',
}
const selectedCardStyle = {
    padding: '0px',
    border: '1px solid rgba(0,0,0,.18)',
    borderRadius: '10px',
    margin: '0px 20px 5px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const PcBuilder = () => {
    const components = useSelector((state) => state.components.components);
    const count = useSelector((state) => state.components.count);

    const categories = ['processor', 'motherboard', 'ram', 'power-supply', 'storage-device', 'monitor', 'others'];
    // console.log(components);
    return (
        <div>
            <h1 style={{ textAlign: 'center', margin: '20px' }}>PC BUILDER Page</h1>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <h2 style={{ textAlign: 'center', margin: '20px' }}>Select Components</h2>
                    {
                        categories.map((category) => (
                            // console.log(category)
                            <Row gutter={[16, 16]} key={category}>
                                <Col span={12}>
                                    <Card hoverable style={categoryCardStyle}>
                                        <span style={{ fontWeight: 'bold', paddingRight: '25px', textTransform: 'uppercase' }}>{category}</span>

                                        <Button type='primary'><Link href={`/pc-builder/${category}`}>Choose</Link></Button>
                                    </Card>
                                </Col>
                            </Row>
                        ))
                    }
                </Col>

                <Col span={12}>
                    <h2 style={{ textAlign: 'center', margin: '20px' }}>Selected Components: {count} selected</h2>
                    {
                        components.map((component) => (

                            <div key={component.id} style={selectedCardStyle}>
                                <h3 style={{ padding: '0px', margin: '0px' }} level={5}>{component.name}</h3>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div>
                                        <Image style={{ width: '100px', padding: '0px', margin: '0px' }} src={component.image} alt='component-image'></Image>
                                    </div>
                                    <div>
                                        <Tag color="magenta">Price : {component.price}</Tag>
                                        <Tag color="magenta">{component.category}</Tag>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                    {
                        count >= 5 ? <Button type='primary'>Complete Build</Button> : <Button disabled>Complete Build</Button>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default PcBuilder

PcBuilder.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}