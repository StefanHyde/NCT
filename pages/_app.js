import '@/styles/globals.css'
import Layout from "@/components/layouts/layout";
import ScrollToTop from '@/components/scrollToTop';
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <GoogleAnalytics />
            <Component {...pageProps} />
            <ScrollToTop />
        </Layout>
    )
}
