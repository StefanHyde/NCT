import '@/styles/globals.css'
import Layout from "@/components/layouts/layout";
import ScrollToTop from '@/components/scrollToTop';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';



export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <GoogleAnalytics />
            <Component {...pageProps} />
            <ScrollToTop />
            <SpeedInsights />
            <Analytics />
        </Layout>
    )
}
