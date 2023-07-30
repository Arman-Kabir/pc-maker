import AllProducts from "@/components/UI/AllProducts";
import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";

const HomePage = ({allProducts}) => {
  // console.log(allProducts);
  return (
    <div>
      <Head>
        <title>PC-Maker home Page</title>
        <meta name='home page' description=""></meta>
      </Head>

      <AllProducts products={allProducts}></AllProducts>
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
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return {
    props:{
      allProducts:data,
    }
  }
}