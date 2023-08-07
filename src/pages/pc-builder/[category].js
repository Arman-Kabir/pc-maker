import AllProducts from "@/components/UI/AllProducts";
import RootLayout from "@/components/layouts/RootLayout";
import { addComponent } from "@/redux/api/componentsSlice";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const CategoryPage = ({ allProducts }) => {
    const components = useSelector((state) => state.components.components);
    // const router = useRouter();

    // console.log(allProducts);
    return (
        <div>
            <AllProducts products={allProducts}>
                pc-builder
            </AllProducts>
        </div>
    )
}

export default CategoryPage;

CategoryPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}

export const getServerSideProps = async (context) => {
    // console.log(context.query);
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