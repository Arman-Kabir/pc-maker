import Image from "next/image";
import { useRouter } from "next/router";

const ErrorPage = () => {
    const router = useRouter();
    setTimeout(()=>{
        router.push("/");
    },50000);
    
  return (
    <div>
        <Image src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="" width='100%' />
    </div>
  )
}

export default ErrorPage;