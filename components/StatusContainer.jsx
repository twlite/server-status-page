export default function StatusContainer({ name = "Unknown Server", status = "offline", timestamp = new Date().toUTCString(), ping = "0ms" }) {
    return (
        <div className="statusholder row">

            <div className="statusbox name col-sm">
                <h3 className="mt-2">{name}</h3>
            </div>

            <div className="statusbox name col-sm">
                <h4 className="mt-2">{ping}</h4>
            </div>

            <div className="statusbox timestamp col-sm">
                <h5 className="mt-2">{timestamp}</h5>
            </div>

            <div className="statusbox status col-sm">
                <div className="serverstatus">
                    <img src={`/icons/${status || 'none'}.png`} alt="icon" draggable="false" className={"outage outage_status_" + status} data-toggle="tooltip" data-placement="right" title={["none", "online"].includes(status) ? "Online" : status.split("").map((x, i) => i === 0 ? x.toUpperCase() : x.toLowerCase()).join("") + " Outage"} />
                </div>
            </div>

        </div>
    )
}
