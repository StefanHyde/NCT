import '@/styles/globals.css'
import Layout from "@/components/layouts/layout";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({Component, pageProps}) {
    return (
        <Layout>
            <GoogleAnalytics />
            <Component {...pageProps} />
        </Layout>
    )
}
