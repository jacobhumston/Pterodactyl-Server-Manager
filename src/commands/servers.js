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
    async function ChooseServer() {
        try {
            const Servers = await Requests.GetServers();
            await Interaction.editReply({
                content: Servers.length,
            });
        } catch (error) {
            await Interaction.editReply({ content: error });
        }
    }

    await ChooseServer();
};
