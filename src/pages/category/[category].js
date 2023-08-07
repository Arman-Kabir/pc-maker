import AllProducts from "@/components/UI/AllProducts";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";


const Category = ({ allProducts }) => {
  // const router = useRouter();
  console.log(allProducts);
  return (
    <div>
      <AllProducts products={allProducts}>
      </AllProducts>
    </div>
  )
}

export default Category;

Category.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}

export const getServerSideProps = async (context) => {
  const { category } = context.params;
  // const res = await fetch(`https://pc-maker-backend.vercel.app/categories/${category}`);
  const res = await fetch(`https://pc-maker-backend.onrender.com/categories/${category}`);
  const data = await res.json();
  return {
    props: {
      allProducts: data,
    }
  }
}