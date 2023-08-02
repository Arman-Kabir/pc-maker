import AllProducts from "@/components/UI/AllProducts";
import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";


const Category = ({ allProducts }) => {
  const router = useRouter();
  console.log(allProducts);
  return (
    <div>Category:{router.query.category}
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
  const { category } = context.query;
  const res = await fetch(`http://localhost:3000/api/categories/${category}`);
  const data = await res.json();
  return {
    props: {
      allProducts: data.data,
    }
  }
}