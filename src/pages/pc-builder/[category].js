import RootLayout from "@/components/layouts/RootLayout";
import { useRouter } from "next/router";

const CategoryPage = ({ allProducts }) => {
    const router = useRouter();
    console.log(allProducts);
    return (
        <div>CategoryPageeee:{router.query.category}</div>
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
    const {category} = context.query;
    const res = await fetch(`http://localhost:3000/api/categories/${category}`);
    const data = await res.json();
    return {
        props: {
            allProducts: data.data,
        }
    }
}