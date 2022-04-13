exports.Data = {
    name: "servers",
    description: "Manage your Pterodactyl servers.",
    type: "CHAT_INPUT",
    options: null,
    defaultPermission: true,
};

const Discord = require("discord.js");
const Emojis = require("../emojis.json");
const Config = require("../config.json");
const Requests = require("../requests.js");

exports.Run = async function (Client, Interaction) {
    try {
        async function ChooseServer() {
            const Servers = await Requests.GetServers();
            await Interaction.editReply({
                content: `Server size is ${Servers.length}`,
            });
        }

        
        await ChooseServer();
    } catch (error) {
        await Interaction.editReply({ content: error });
    }
};
