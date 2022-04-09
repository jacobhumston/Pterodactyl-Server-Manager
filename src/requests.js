// Docs: https://dashflo.net/docs/api/pterodactyl/v1/

const Config = require("./config.json");
const Fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const BaseURL = Config["panel-url"];
const APIKey = Config["api-key"];

const IgnoredServers = Config["extra"]["ignored-servers"] ?? [];

exports.GetServers = async function () {
    const Response = await Fetch(`${BaseURL}/api/client/`, {
        method: "get",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${APIKey}`,
        },
    });
    const JSON = await Response.json().catch((error) => {
        throw "API did not return a valid JSON format.";
    });
    const Data = JSON.data;
    if (!Data) throw "API did not return any needed data.";
    const Servers = [];
    ServerLoop: for (const Server of Data) {
        for (const IgnoredValue of IgnoredServers) {
            if (Server.attributes.name == IgnoredValue || Server.attributes.identifier == IgnoredValue || Server.attributes.uuid == IgnoredValue) {
                continue ServerLoop;
            }
        }
        Servers.push(Server);
    }
    return Servers;
};
