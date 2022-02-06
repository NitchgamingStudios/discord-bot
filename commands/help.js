module.exports = {
    name: 'help',
    description: 'displays command info',
    cooldown: 60,
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#03f0fc')
            .setTitle('Bot Commands List')
            .setAuthor(`Nitch's Studio Helper`, 'https://i.imgur.com/hKwNtq5.png')
            .addFields(
                { name: "PREFIX", value: "Bot prefix is `~` \n **--------------------**" },
                { name: "FUN COMMANDS (COMING SOON)", value: "**--------------------**" },
                { name: "MOD/ADMIN COMMANDS", value: "**mute** --mutes the specified member, \n **unmute** --unmuted the specified user, \n **kick** --kicks the specified user, \n **ban** --bans the specified user, \n **clear/purge** --clears the selected amount of messages (1-100) \n **warn** --sends a warning in the target user's DMs \n **wnm** --sends a warning to the target in DMs and muted them indefinitely \n **--------------------**" },
                { name: "MISC", value: "**ping** --checks the ping from the bot to you, \n **uptime** --checks the uptime of this bot" },
                { name: 'View the Rules', value: "**rules** --lists the discord rules" }
            )
            .setTimestamp()
        message.channel.send(newEmbed);
        console.log(`The 'help' command has been ran.`);
    }
}