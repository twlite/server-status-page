export default (req, res) => {
    const pingTimestamp = new Date().toLocaleString();

    return res.status(200).json([
        {
            node: "North America",
            servers: [
                { name: "NA-01", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "NA-02", status: "none", timestamp: pingTimestamp, ping: "0 ms" }
            ]
        },
        {
            node: "Staff",
            servers: [
                { name: "Panel", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "ST-01", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "ST-02", status: "none", timestamp: pingTimestamp, ping: "0 ms" }
            ]
        },
        {
            node: "Other",
            servers: [
                { name: "Panel", status: "major", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "API", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "CDN", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "MySQL", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "Proxy", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "Crypto", status: "none", timestamp: pingTimestamp, ping: "0 ms" },
                { name: "Mail", status: "none", timestamp: pingTimestamp, ping: "0 ms" }
            ]
        }
    ])
}