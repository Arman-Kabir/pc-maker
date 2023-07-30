
import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { AppstoreOutlined, MailOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import items from '@/utils/dropdown-items';

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
                    <Button type="primary" small>
                        <Link href='/pc-builder'>PC BUILDER</Link>
                    </Button>

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
                    PC-Maker @ 2023
                </Footer>
            </Layout>
        </div>
    )
}

export default RootLayout;