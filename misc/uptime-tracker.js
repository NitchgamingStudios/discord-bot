const Discord = require('discord.js');

module.exports = async (client) => {
    const channel = client.channels.cache.get('894898380189368330');
    setInterval(async () => {
        const msg = await channel.messages.fetch('895276215336845312')
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
            .setDescription(`This bot has been live for **${uptime}**. \n Online: <a:Anim_Checkmark:894764821256503356>`)
            .setAuthor(`Nitch's Studio Helper`, `https://i.imgur.com/hKwNtq5.png`)
            .setTimestamp()
        msg.edit(newEmbed);
        console.log('Tracking Stats')
    }, 2000);
}