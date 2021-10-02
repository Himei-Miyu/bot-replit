const { Client, Intents } = require('discord.js');
const { Replit: { prefix, invite } } = require('./config');

require('dotenv').config();

const intents = new Intents(8);
const client = new Client({ intents });

client.on('ready', (client) => {
    console.log(`${client.user.tag} ${prefix}is running...`);
    setInterval(() => {
        client.user.setPresence({
            activities: [{
                name: `${time().days}:${time().hours}:${time().minutes}:${time().seconds}`,
                type: 'WATCHING'
            }],
            status: 'idle'
        });
    }, 1000)

})

client.login(process.env.TOKEN);

function time() {

    let days = Math.floor(client.uptime / 86400000)
    let hours = Math.floor(client.uptime / 3600000) % 24
    let minutes = Math.floor(client.uptime / 60000) % 60
    let seconds = Math.floor(client.uptime / 1000) % 60

    if (days < 9) { days = "0" + days }
    if (hours < 9) { hours = "0" + hours }
    if (minutes < 9) { minutes = "0" + minutes }
    if (seconds < 9) { seconds = "0" + seconds }

    return {
        days,
        hours,
        minutes,
        seconds
    }
}