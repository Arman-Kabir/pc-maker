import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
   return (
    <div>
      <Head>
        <title>PC-Maker home Page</title>
        <meta name='home page' description=""></meta>
      </Head>
        <h1>This is nextJs Home Page</h1>
    </div>
   )
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }