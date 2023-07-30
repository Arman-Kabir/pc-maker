
import { Breadcrumb, Dropdown, Layout, Menu, Space, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { AppstoreOutlined, MailOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';

const items = [
    {
        key: '1',
        label: (
            <Link href="/processor">Processor</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/motherboard">Motherboard</Link>
        )

    },
    {
        key: '3',
        label: (
            <Link href="/ram">Ram</Link>
        )
    },
    {
        key: '4',

        label: (
            <Link href="/power-supply-unit">Power Supply Unit</Link>
        )
    },
    {
        key: '5',

        label: (
            <Link href="/storage-device">Storage Device</Link>
        )
    },
    {
        key: '6',

        label: (
            <Link href="/monitor">Monitor</Link>
        )
    },
    {
        key: '7',

        label: (
            <Link href="/others">Others</Link>
        )
    }
];



const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Layout className="layout">
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <div className="demo-logo" style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
                        PC-Maker
                    </div>

                    <Dropdown menu={{ items }}>
                        <Space style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>Categories</Space>
                    </Dropdown>
                </Header>
                <Content
                    style={{
                        padding: '0 50px',
                    }}
                >

                    <div
                        className="site-layout-content"
                        style={{
                            background: colorBgContainer,
                            height: "100vh"
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </div>
    )
}

export default RootLayout;