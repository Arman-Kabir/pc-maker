import AllProducts from "@/components/UI/AllProducts";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Slider from "@/components/UI/Slider";
import RootLayout from "@/components/layouts/RootLayout";

import Head from "next/head";

const HomePage = ({ allProducts }) => {

  const featuredProducts = allProducts?.filter((product) => product.featured == true);
  // console.log(featuredProducts);
  return (
    <div>
      <Head>
        <title>PC-Maker home Page</title>
        <meta name='home page' description=""></meta>
      </Head>
      
      <Slider products={featuredProducts}></Slider>


      <h1 style={{ fontSize: '36px', textAlign: 'center', fontWeight: 'bold' }}>Featured Products</h1>
      <AllProducts products={featuredProducts.slice(0, 6)}></AllProducts>


      <h1 style={{ fontSize: '36px', textAlign: 'center', fontWeight: 'bold' }}>Featured Catewory</h1>
      <FeaturedCategory></FeaturedCategory>

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
  // const res = await fetch("https://pc-maker-backend.vercel.app/products");
  const res = await fetch("https://pc-maker-backend.onrender.com/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    },
    revalidate: 10,
  }
}