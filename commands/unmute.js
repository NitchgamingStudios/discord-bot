module.exports = {
    name: 'unmute',
    permissions: ["MUTE_MEMBERS"],
    description: "This unmutes a member",
    execute(client, message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name.startsWith("muted"));

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole);
            message.channel.send(`**${memberTarget.user.tag}** has been unmuted`);

        } else if (!target) {
            message.channel.send(`${message.author}, unmute failed. Please mention a user.`)

        } else {
            message.channel.send('Member could not be found.');

        }
    }
}