const { MessageEmbed } = require('discord.js');

module.exports = (client, ) => {
    const channelId = "778051649800765501";
    const rulesChannel = "778051417620873277";
    const rolesChannel = "879191448782770236";
    const roles2Channel = "778052928786399266";
    client.on("guildMemberAdd", (member) => {
        console.log(member)

        const exampleEmbed = new MessageEmbed()
            .setColor('#703aff')
            .setTitle(`Welcome To Nitch's Gaming Studio`)
            .setAuthor(member.user.username, member.user.avatarURL({ format: "png" }))
            .setThumbnail(member.user.avatarURL({ format: "png", size: 256 }))
            .setImage(`https://ak.picdn.net/shutterstock/videos/1018752301/thumb/9.jpg`)
            .setDescription(`Welcome, <@${member.id}>. Be sure to check out <#${rulesChannel}>, grab yourself some roles at <#${rolesChannel}> and <#${roles2Channel}>, and have yourself a good one!`)
            .setTimestamp()
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(exampleEmbed);
    });
};