import RootLayout from '@/components/layouts/RootLayout'
import { Button, Card, Space } from 'antd'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const PcBuilder = () => {
    const components = useSelector((state) => state.components);
    console.log(components);
    return (
        <div>
            <Space style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '10px 0', width: '500px' }}>

                <Link href='/pc-builder/processor'><Card hoverable style={{ borderColor: 'crimson', }}>Processor <Button type='primary'>Choose</Button> </Card></Link>


                <Link href='/pc-builder/motherboard'><Card hoverable style={{ borderColor: 'crimson' }}>Motherboard <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/ram'><Card hoverable style={{ borderColor: 'crimson' }}>Ram  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/power-supply-unit'><Card hoverable style={{ borderColor: 'crimson' }}>Power Supply Unit  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/storage-device'><Card hoverable style={{ borderColor: 'crimson' }}>Storage Device  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/pc-builder/monitor'><Card hoverable style={{ borderColor: 'crimson' }}>Monitor  <Button type='primary'>Choose</Button></Card></Link>

                <Link href='/category/others'><Card hoverable style={{ borderColor: 'crimson' }}>Others  <Button type='primary'>Choose</Button></Card></Link>

            </Space>
            <Space>

            </Space>
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