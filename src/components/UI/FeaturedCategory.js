import { Card, Space } from 'antd'
import Link from 'next/link'
import React from 'react'

const FeaturedCategory = () => {
    return (
        <div style={{}}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between',marginBottom:'30px' }}>
                <Link href='/category/processor'><Card hoverable style={{ borderColor: 'crimson' }}>Processor</Card></Link>
                <Link href='/category/motherboard'><Card hoverable style={{ borderColor: 'crimson' }}>Motherboard</Card></Link>
                <Link href='/category/ram'><Card hoverable style={{ borderColor: 'crimson' }}>Ram</Card></Link>
                <Link href='/category/power-supply'><Card hoverable style={{ borderColor: 'crimson' }}>Power Supply Unit </Card></Link>
                <Link href='/category/storage-device'><Card hoverable style={{ borderColor: 'crimson' }}>Storage Device</Card></Link>
                <Link href='/category/monitor'><Card hoverable style={{ borderColor: 'crimson' }}>Monitor</Card></Link>
                <Link href='/category/others'><Card hoverable style={{ borderColor: 'crimson' }}>Others</Card></Link>
            </div>
        </div>
    )
}

export default FeaturedCategory