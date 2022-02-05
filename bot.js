const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client()

const memberCounter = require('./misc/member-counter');
const uptimeTracker = require('./misc/uptime-tracker');
const welcome = require("./misc/welcome");

client.on('ready', () => {
    client.user.setActivity("over Nitch | Type ~help to display the list of commands and functions of the bot.", {
        type: 'WATCHING'
    });

    memberCounter(client);
    welcome(client);
    uptimeTracker(client);
});


// client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.TOKEN);