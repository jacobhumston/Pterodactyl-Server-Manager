const Discord = require("discord.js");
const Emojis = require("./emojis.json");
const Config = require("./config.json");

const Client = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS"],
});

(async function () {
    await Client.login(Config.token);
})();
