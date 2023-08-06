import RootLayout from '@/components/layouts/RootLayout';
import { GithubOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/react';
import Head from 'next/head';
import { useForm } from "react-hook-form";

const LoginPage = () => {

    return (
        <div>
            <Head>
                <title>Next Login</title>
            </Head>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: 'rgba(0,0,255,.35)' }}>
                <h1>LOGIN</h1>

                <div style={{ fontSize: '40px', height: '25px' }}>
                    <GithubOutlined onClick={() => {
                        signIn("github", {
                            callbackUrl:'http://localhost:3000/'
                        })
                    }} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    );
}

