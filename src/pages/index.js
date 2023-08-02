import AllProducts from "@/components/UI/AllProducts";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import RootLayout from "@/components/layouts/RootLayout";

import Head from "next/head";

const HomePage = ({allProducts}) => {
  
  const featuredProducts = allProducts?.filter((product)=>product.featured == true);
  // console.log(featuredProducts);
  return (
    <div>
      <Head>
        <title>PC-Maker home Page</title>
        <meta name='home page' description=""></meta>
      </Head>

      <AllProducts products={featuredProducts.slice(0,6)}></AllProducts>
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
  const res = await fetch("http://localhost:3000/api/products");
  // const res = await fetch("http://localhost:5000/products");
  const data = await res.json();
  return {
    props:{
      allProducts:data.data,
    },
    revalidate:10,
  }
}