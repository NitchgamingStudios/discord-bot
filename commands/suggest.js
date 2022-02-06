module.exports = {
    name: 'suggest',
    aliases: ['suggestions', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    cooldown: 10,
    execute(client, message, args, Discord) {
        const channel = client.channels.cache.get('SUGGESTION_CHANNEL_ID');
        if (!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
            .setColor('396F13')
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(messageArgs)
            .setFooter(`Nitch's Gaming Studio`, `https://i.imgur.com/V67sLRw.png`)
            .setTimestamp();

        channel.send(embed).then((msg) => {
            msg.react('EMOJI_HERE');
            msg.react('EMOJI_HERE');
            message.channel.send(`${message.author}, your suggestion has been sent in <#SUGGESTION_CHANNEL_ID>!`);
        }).catch((err) => {
            throw err;
        });
    }
}