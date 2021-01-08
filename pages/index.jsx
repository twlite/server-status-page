import Home from "../components/Home";
import Footer from "../components/Footer";
import { useRouter } from 'next/router';
import { useEffect } from "react";

export async function getServerSideProps() {

    try {
        const res = await fetch("http://localhost:3000/api/status");
        const json = await res.json();

        return {
            props: {
                data: json,
                error: false
            }
        };
    } catch {
        return {
            props: {
                data: [],
                error: true
            }
        };
    }

}

export default function index({ data = [], error = false }) {
    const router = useRouter();

    useEffect(() => {
        setInterval(() => {
            router.replace(router.asPath);
        }, 15000);
    }, []);

    return (
        <div className="__page__root__">
            <div className="jumbotron bg-dark text-white">
                <Home data={data} error={error} />
                <Footer />
            </div>
        </div>
    )
}
