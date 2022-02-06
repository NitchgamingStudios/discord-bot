module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: "This command kicks a member!",
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        let kickReason = args.join(" ").slice(22);
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);

            if (!kickReason) {
                if (target == message.author)
                    return message.channel.send(`You can't kick yourself!`)
                else
                    memberTarget.kick();
                const exampleEmbed = new Discord.MessageEmbed()
                    .setDescription(`${memberTarget} has been kicked from the server. No reason Specified.`)
                message.channel.send(exampleEmbed);

            } else {
                if (target == message.author)
                    return message.channel.send(`You can't kick yourself!`)
                else
                    memberTarget.kick();
                const newEmbed = new Discord.MessageEmbed()
                    .setDescription(`${memberTarget} has been kicked from the server.\n**Kick Reason:** ${kickReason}.`)
                message.channel.send(newEmbed);
                console.log(`${memberTarget} has been kicked for ${kickReason}`);
            }
        } else message.channel.send(`${message.author}, kick failed. Please mention a user.`)
    }
}