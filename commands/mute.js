const ms = require('ms');
module.exports = {
    name: 'mute',
    permissions: ["MUTE_MEMBERS"],
    description: "This mutes a member",
    execute(client, message, args) {
        const target = message.mentions.users.first();
        if (target) {

            let muteRole = message.guild.roles.cache.find(role => role.name.startsWith("muted"));

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole);
                message.channel.send(`**${memberTarget.user.tag}** has been muted`);
                return
            }
            memberTarget.roles.add(muteRole);
            message.channel.send(`**${memberTarget.user.tag}** has been muted for ${ms(ms(args[1]))}`);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
            }, ms(args[1]));

        } else if (!target) {
            message.channel.send(`${message.author}, mute failed. Please mention a user.`)

        } else {
            message.channel.send(`Member could not be found.`)

        }
    }
}