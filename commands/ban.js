module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: "This command bans a member!",
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        let banReason = args.join(" ").slice(22);
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);

            if (!banReason) {
                if (target == message.author)
                    return message.channel.send(`You can't ban yourself!`)
                else
                    memberTarget.ban();
                const exampleEmbed = new Discord.MessageEmbed()
                    .setDescription(`${memberTarget} has been banned from the server. No reason Specified.`)
                message.channel.send(exampleEmbed);

            } else {
                if (target == message.author)
                    return message.channel.send(`You can't ban yourself!`)
                else
                    memberTarget.ban();
                const newEmbed = new Discord.MessageEmbed()
                    .setDescription(`${memberTarget} has been banned from the server.\n**Ban Reason:** ${banReason}.`)
                message.channel.send(newEmbed);
                console.log(`${memberTarget} has been banned for ${banReason}`);
            }
        } else message.channel.send(`${message.author}, ban failed. Please mention a user.`)
    }
}