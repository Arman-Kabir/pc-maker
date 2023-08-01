import PcBuilderComponent from '@/components/UI/PcBuilderComponent'
import RootLayout from '@/components/layouts/RootLayout'
import { Button, Card, Col, Row, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const PcBuilder = () => {
    const components = useSelector((state) => state.components.components);
    // console.log(components);
    return (
        <div style={{ display: 'grid',gridAutoColumns:'1fr 1fr' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '10px 0', width: '500px' }}>

                <Link href='/pc-builder/processor'><Card hoverable style={{ borderColor: 'crimson', width: '500px' }}>Processor <Button type='primary'>Choose</Button> </Card></Link>


                <Link href='/pc-builder/motherboard'><Card hoverable style={{ borderColor: 'crimson' }}>Motherboard <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/ram'><Card hoverable style={{ borderColor: 'crimson' }}>Ram  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/power-supply-unit'><Card hoverable style={{ borderColor: 'crimson' }}>Power Supply Unit  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/storage-device'><Card hoverable style={{ borderColor: 'crimson' }}>Storage Device  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/monitor'><Card hoverable style={{ borderColor: 'crimson' }}>Monitor  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/category/others'><Card hoverable style={{ borderColor: 'crimson' }}>Others  <Button type='primary'>Choose</Button></Card></Link>

            </div>



            <div>
                {
                    components.map((component) => (
                        <PcBuilderComponent key={component.id} component={component}>Hello</PcBuilderComponent>
                       
                    ))
                }
            </div>



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