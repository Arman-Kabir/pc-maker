import PcBuilderComponent from '@/components/UI/PcBuilderComponent'
import RootLayout from '@/components/layouts/RootLayout'
import { Button, Card, Col, Row, Space } from 'antd'
import Image from 'next/image'
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
    height: '100px',
    margin: '5px 0px',
    // backgroundColor:'black',
    // color:'white',
    // borderColor: 'crimson',
    display: 'flex',
    alignItems: 'center',
}

const PcBuilder = () => {
    const components = useSelector((state) => state.components.components);
    const count = useSelector((state) => state.components.count);

    const categories = ['processor', 'motherboard', 'ram', 'power-supply-unit', 'storage-device', 'monitor', 'others'];
    // console.log(components);
    return (
        <div>
            <h1 style={{textAlign:'center',margin:'20px'}}>PC BUILDER Page</h1>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <h2 style={{textAlign:'center',margin:'20px'}}>Select Components</h2>
                    {
                        categories.map((category) => (
                            // console.log(category)
                            <Row gutter={[16, 16]} key={category}>
                                <Col span={12}>
                                    <Card hoverable style={categoryCardStyle}>
                                        <span style={{ fontWeight: 'bold', paddingRight: '25px',textTransform:'uppercase' }}>{category}</span>

                                        <Button type='primary'><Link href={`/pc-builder/${category}`}>Choose</Link></Button>
                                    </Card>
                                </Col>                              
                            </Row>
                        ))
                    }
                </Col>

                <Col span={12}>
                    <h2 style={{textAlign:'center',margin:'20px'}}>Selected Components: {count} selected</h2>
                    {
                        components.map((component) => (
                            // <PcBuilderComponent key={component.id} component={component}>Hello</PcBuilderComponent>

                            <Card key={component.id} style={selectedCardStyle}>
                                <Image src={component.image} width={'100'} height={'100'} alt='component-image'></Image>
                                <p>{component.name}</p>
                            </Card>
                        ))
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