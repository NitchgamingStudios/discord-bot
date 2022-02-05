const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'wnm',
    permissions: ["MUTE_MEMBERS"],
    description: "This command warns a member!",
    execute(client, message, args, Discord) {
        const target = message.mentions.users.first();
        const warner = message.author;
        let warnReason = args.join(" ").slice(22);
        let role = message.guild.roles.cache.find(r => r.id === "787889668779409408");

        const newEmbed = new MessageEmbed()
            .setTitle('**You have recieved a warning, and are now muted**')
            .setDescription(`${warnReason}`)
            .setFooter(`Warned by: ${warner.tag}`)
            .setTimestamp()

        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id)

            if (!warnReason) {
                if (target == message.author)
                    return message.channel.send(`You can't warn yourself!`)
                else
                    return message.channel.send(`${message.author}, you can't warn someone without a reason...`)
            } else if (target == message.author) {
                return message.channel.send(`You can't warn yourself!`)
            } else {
                message.reply(`${memberTarget} has been warned.`)
                message.delete()
                memberTarget.send(newEmbed)
                memberTarget.roles.add(role);
                console.log(`A user has been warned!`)
            }
        } else {
            return message.channel.send(`${message.author}, you need to mention someone for this command to work.`)
        }
    }
}