import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:url" content="https://bluefoxstatus.vercel.app" />
                <meta name="twitter:title" content="BlueFoxHost Status" />
                <meta name="twitter:description" content="BlueFoxHost Status" />
                <meta name="twitter:image" content="https://bluefoxstatus.vercel.app/logo.jpg" />
                <meta name="twitter:creator" content="@Snowflake107" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="BlueFoxHost Status" />
                <meta property="og:description" content="BlueFoxHost Status" />
                <meta property="og:site_name" content="BlueFoxHost Status" />
                <meta property="og:url" content="https://bluefoxstatus.vercel.app" />
                <meta property="og:image" content="https://bluefoxstatus.vercel.app/logo.jpg" />

                <title>BlueFoxHost - Status</title>

                {/* CSS */}
                <link rel="stylesheet" href="/styles/bootstrap.min.css" />
                <link rel="stylesheet" href="/styles/stylesheet.css" />

                {/* JS */}
                <script src="/scripts/jquery.min.js"></script>
                <script src="/scripts/bootstrap.min.js"></script>
                <script src="/scripts/script.js" defer></script>
            </Head>

            <Component {...pageProps} />
        </>
    )
}