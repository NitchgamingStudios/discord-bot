module.exports = {
    name: 'suggest',
    aliases: ['suggestions', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    cooldown: 10,
    execute(client, message, args,  Discord){
        const channel = client.channels.cache.get('892408399583670283');
        if(!channel) return message.channel.send('suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('396F13')
        .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs)
        .setFooter(`Nitch's Gaming Studio`, `https://i.imgur.com/V67sLRw.png`)
        .setTimestamp();

        channel.send(embed).then((msg) =>{
            msg.react('<:upvote:895512958166261812>');
            msg.react('<:downvote:895512958266929183>');
            message.channel.send(`${message.author}, your suggestion has been sent in <#892408399583670283>!`);
        }).catch((err)=>{
            throw err;
        });
    }
}