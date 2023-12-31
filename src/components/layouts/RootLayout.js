
import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
const { Header, Content, Footer } = Layout;
import { AppstoreOutlined, MailOutlined, SettingOutlined, SmileOutlined } from '@ant-design/icons';
import Link from 'next/link';
import items from '@/utils/dropdown-items';
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer } from 'react-toastify';

const RootLayout = ({ children }) => {
    const { data: session } = useSession();
    console.log("from header", session);

    const {
        token: { bodyBg },
    } = theme.useToken();
    return (
        <div style={{}}>
            <Layout className="layout" style={{ margin:'0',padding:'0'}}>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // backgroundColor:'#fff',
                       
                    }}
                >
                    <div className="demo-logo" style={{ color: "white", fontWeight: "bold", fontSize: "20px", lineHeight: '0' }}>
                        <Link href='/'>PC-Maker</Link>
                    </div>
                    <Button type="primary">
                        <Link href='/pc-builder'>PC BUILDER</Link>
                    </Button>

                    <div style={{}}>
                        <Dropdown menu={{ items }}>
                            <Space style={{ color: "white", fontWeight: "bold", fontSize: "24px" }}>Categories</Space>
                        </Dropdown>
                        {
                            session?.user ?
                                <Button onClick={() => signOut()}>Logout</Button> :
                                <Link href='/login'><Button>Login</Button></Link>
                        }
                    </div>
                </Header>

                <Content
                    style={{
                        // padding: '0 15%',
                        width:"var(--max-width)",
                        margin:'0 auto',
                        backgroundColor:'bodyBg',
                    }}
                >
                    <div
                        className="site-layout-content"
                        style={{
                            background: bodyBg,
                            minHeight: "100vh"
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