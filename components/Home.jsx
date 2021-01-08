import StatusContainer from "../components/StatusContainer";

export default function Home({ data = [], error = false }) {
    return (
        <div className="b">
            <div className="head mt-5">
                <img src="/logo.jpg" className="logo" alt="logo" draggable="false" />
            </div>
            <h1 className="text-center mt-4 textheader">BlueFoxHost - Status</h1>
            <div className="buttonsholder mt-2">
                <a href="https://discord.gg/uqB8kxh" className="btn btn-lg btn-outline-primary buttons text-white">Discord</a>
                <a href="https://bluefoxhost.com" className="btn btn-lg btn-primary buttons">Website</a>
            </div>
            <div className="container mt-5">
                {
                    !!error || !data.length ? (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error Ahoy!</strong> {!data || !data.length ? "No Data Available" : "Something went wrong while fetching data!"}
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    )
                    :
                        data.map((m, i) => {
                            return (
                                <div className="dc">
                                    <h2>{i+1}. {m.node}</h2>
                                    <div className="jumbotron bg-transparent text-white status_container">
                                        {m.servers.map(x => <StatusContainer name={x.name} status={x.status} timestamp={x.timestamp} ping={x.ping} className="satusbox" />)}
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}