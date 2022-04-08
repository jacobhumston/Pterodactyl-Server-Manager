const Discord = require("discord.js");
const Emojis = require("./emojis.json");
const Config = require("./config.json");

const Client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

Client.on("messageCreate", async function (Message) {});

Client.login(Config.token);
