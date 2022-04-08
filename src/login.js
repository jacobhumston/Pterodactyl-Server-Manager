const Discord = require("discord.js");
const Emojis = require("./emojis.json");
const Config = require("./config.json");
const FileSystem = require("fs");

const Client = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS"],
});

const Commands = [];

for (const CommandFile of FileSystem.readdirSync("./src/commands")) {
    const Data = require("./commands/" + CommandFile).Data;
    Commands.push(Data);
}

(async function () {
    await Client.login(Config.token);
    await Client.application.commands.set(Commands);
})();
