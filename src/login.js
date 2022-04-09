const Discord = require("discord.js");
const Config = require("./config.json");
const FileSystem = require("fs");

const Client = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS"],
});

const Commands = [];

for (const CommandFile of FileSystem.readdirSync("./src/commands")) {
    Commands.push(require("./commands/" + CommandFile).Data);
}

Client.on("ready", async function () {
    console.log(`PSM (${Client.user.tag}) is ready! Running on Node.js ${process.version}!`);
});

Client.on("interactionCreate", async function (Interaction) {
    if (!Interaction.isApplicationCommand()) return;
    await Interaction.deferReply({ ephemeral: true });
    for (const CommandFile of FileSystem.readdirSync("./src/commands")) {
        const Command = require("./commands/" + CommandFile);
        if (Interaction.commandName == Command.Data.name) {
            await Command.Run(Client, Interaction).catch(async (error) => {
                console.error(error);
                await Interaction.editReply("Something has gone wrong, it has been logged in console.").catch(async (error) => {
                    return;
                });
            });
            break;
        }
    }
});

(async function () {
    await Client.login(Config.token);
    await Client.application.commands.set(Commands);
})();
