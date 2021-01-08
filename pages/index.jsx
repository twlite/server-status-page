import Home from "../components/Home";
import Footer from "../components/Footer";

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
    return (
        <div className="__page__root__">
            <div className="jumbotron bg-dark text-white">
                <Home data={data} error={error} />
                <Footer />
            </div>
        </div>
    )
}
