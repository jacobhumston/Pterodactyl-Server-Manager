# Pterodactyl-Server-Manager

Pterdoactyle Server Manager (PSM) is a free-to-use Discord Bot, which allows you to manage your servers from a Discord Bot. **Reminder:** PSM requires an API key to work.

_If you don't know what Pterdoactyle is, please refer to https://pterodactyl.io/._

> You can create an API key at `https://<panel URL>/account/api`.

Please note that not all hosts allow their users to create API keys, please refer to your host provider for any questions related to restrictions.

> **Note for administrators of hosts:** PSM is only intended for client use at this time, and only supports client endpoints; `api/client`. Support for the application side of the API may be added later.

Before you are provided with the instructions on how to use PSM, I would like to mention that this project was created as a personal endeavor and can always be improved upon by anyone who would like to do so. If you would like a new feature added, but don't know how to commit such a feature yourself, create an issue.

# Setup & Configuration

To be able to use PSM, you have to create a `config.json` file in the `src` directory with the following contents:

```json
{
    "api-key": "pterodactyl api key",
    "users": ["discord user id"],
    "token": "discord bot token",
    "panel-url": "pterodactyl panel url",
    "extra": {
        "log-webhook-url": "discord webhook url",
        "ignored-servers": ["pterodactyl server"],
        "interaction-time-limit": 10000
    }
}
```

Or: (with no extra values)

```json
{
    "api-key": "pterodactyl api key",
    "users": ["discord user id"],
    "token": "discord bot token",
    "panel-url": "pterodactyl panel url"
}
```

## Value Explanations

| Value     | Explanation                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------ |
| api-key   | Your Pterodactyl API key.                                                                        |
| users     | An array of user IDs of who can use the bot's commands. **Only add yourself or trusted people.** |
| token     | Your Discord Bot token.                                                                          |
| panel-url | Base link to the Pterodactyl panel. Example: `https://panel.pterodactyl`                         |

> **WARNING!** Always keep your tokens and API keys safe. Do not share them with anyone you do not trust. **Anyone** who has these tokens and/or API keys can do whatever **you** can.

## Extra Values Explanations

All extra values are completely optional.

| Value                  | Explanation                                                                                                                                                      |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log-webhook-url        | A Discord webhook URL to log events such as when someone runs a command.                                                                                         |
| ignored-servers        | All Pterodactyl servers listed here will not be listed as options when managing your servers through the bot. Supports the server's name, short ID, and full ID. |
| interaction-time-limit | How long before the bot will no longer wait for interactions in milliseconds. (Such as buttons.) Default is 10 minutes/10000 milliseconds.                       |

## Starting The Bot

After you've created the `config.json` file, start your server or run `node src/login.js` and your bot will be ready to use.

Please wait an hour for your slash commands to register. If they never register, please reinvite your bot with the correct invite.

> **Example of a correct invite:** `https://discord.com/api/oauth2/authorize?client_id=<clientid>&permissions=0&scope=bot%20applications.commands`.

_A more in-depth explanation of invites can be found [here](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)._

# You're all set!

If you run into any issues or have any questions, create an issue here: https://github.com/jacobhumston/Pterodactyl-Server-Manager/issues

If you did not know already, type `/` in chat to view a list of commands.

**_Happy server managing!_**
