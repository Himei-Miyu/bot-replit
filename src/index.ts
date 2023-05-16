import { ActivityType, Client } from "discord.js";

const client = new Client({ intents: ["GuildPresences"] });

client.once("ready", (client) => {
    const [
        {
            user: { username, discriminator },
        },
        { user },
    ] = [client, client];
    const botName = `${username}#${discriminator}`;

    console.info(`Bot ${botName} is running`);

    user.setPresence({
        activities: [
            {
                name: `${botName} Running on Replit`,
                type: ActivityType.Streaming,
                url: "https://twitch.tv/himei_miyu",
            },
        ],
        status: "idle",
    });
});

client.login(process.env.TOKEN);
