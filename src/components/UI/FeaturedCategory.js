import { Card, Space } from 'antd'
import Link from 'next/link'
import React from 'react'

const FeaturedCategory = () => {
    return (
        <div>
            <h1 style={{ fontSize: '36px', textAlign: 'center', fontWeight: 'bold' }}>Featured Catewory</h1>
            <Space style={{ display: 'flex', justifyContent: 'space-between', margin: '0 10px' }}>
                <Link href='/processor'><Card hoverable style={{ borderColor: 'crimson' }}>Processor</Card></Link>
                <Link href='/motherboard'><Card hoverable style={{ borderColor: 'crimson' }}>Motherboard</Card></Link>
                <Link href='/ram'><Card hoverable style={{ borderColor: 'crimson' }}>Ram</Card></Link>
                <Link href='/power-supply-unit'><Card hoverable style={{ borderColor: 'crimson' }}>Power Supply Unit </Card></Link>
                <Link href='/storage-device'><Card hoverable style={{ borderColor: 'crimson' }}>Storage Device</Card></Link>
                <Link href='/monitor'><Card hoverable style={{ borderColor: 'crimson' }}>Monitor</Card></Link>
                <Link href='/others'><Card hoverable style={{ borderColor: 'crimson' }}>Others</Card></Link>
            </Space>
        </div>
    )
}

export default FeaturedCategory