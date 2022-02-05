module.exports = {
    name: 'downtime',
    permissions: ['ADMINISTRATOR'],
    description: "This checks the bot uptime",
    execute(client, message, args, Discord) {
        const channel = client.channels.cache.get('894898380189368330');
        // const msg = channel.messages.fetch('894984032507535392')
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let uptime = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        const newEmbed = new Discord.MessageEmbed()
        .setTitle(`Nitch's Custom Bot's Stats`)
        .setDescription(`This Bot is offline. \n Online: <a:Anim_Cross:894764821386526740>`)
        .setAuthor(`Nitch's Studio Helper`, `https://i.imgur.com/hKwNtq5.png`)
        .setTimestamp()
        channel.send(newEmbed);
    }
}