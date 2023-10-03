// import '@/styles/globals.css'

import store from "@/redux/store"
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <ToastContainer />
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </SessionProvider>
  )
}
