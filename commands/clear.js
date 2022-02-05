module.exports = {
    name: 'clear',
    permissions: ["MANAGE_MESSAGES"],
    description: 'clears messages',
    cooldown: 20,
    aliases: ['purge'],
    async execute(client, message, args, Discord) {
        if (!args[0]) return message.reply('Please specify the amount of messagesyou want to be cleared (1-100)');
        if (isNaN(args[0])) return message.reply('Please enter a number from 1-100');
        if (args[0] > 100) return message.reply('You cannot delete any more than 100 messages!');
        if (args[0] < 1) return message.reply('There are no messages to delete!');
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            const newEmbed = new Discord.MessageEmbed()
                .setDescription(`Messages have been deleted.`)
            message.channel.bulkDelete(messages);
            message.channel.send(newEmbed)
                .then(message => {
                    message.delete({ timeout: 5000 /*time unitl delete in milliseconds*/ });
                })
        });
    }
}