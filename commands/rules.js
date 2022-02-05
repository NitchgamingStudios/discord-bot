module.exports = {
    name: 'rules',
    description: 'Rules embedded',
    cooldown: 60,
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Server Rules')
            .setAuthor(`Nitch's Studio Helper`, `https://i.imgur.com/hKwNtq5.png`)
            .setDescription('The rules of this Discord server')
            .addFields(
                { name: "MUST READ", value: "**--------------------------------------------------**" },
                { name: "Rule 1", value: "• Out of respect for everyone, keep the textchats in english only" },
                { name: "Rule 2", value: "• This is NOT a PG server so swearing is allowed but keep it at a minimum if possible." },
                { name: "Rule 3", value: "• Don't be toxic - Play nice, resolve any issues in DM's (Less drama the better)" },
                { name: "Rule 4", value: "• No mic spamming - This applies to music, ear rape, general obnoxiousness and voicechangers." },
                { name: "Rule 5", value: "• Keep Music/Singing to Karaoke Bar/Lounge over other voice channels " },
                { name: "Rule 6", value: "• Do NOT do @here or @everyone, it's not allowed so don't try(also dont set your name to it)." },
                { name: "Rule 7", value: "• Respect mods at all times, not doing so will result in a mute." },
                { name: "Rule 8", value: "• Pinging mods without a valid reason could resolve in a mute." },
                { name: "Rule 9", value: "• Sending DM's of which break our server rules is not allowed." },
                { name: "Rule 10", value: "• Do NOT repeat the same messages/few character messages for 'XP for Levels' INCLUDES shitposting just for 'XP' or just general shitposting" },
                { name: "Rule 11", value: "• No JumpScare/Screamer Links within any channel." },
                { name: "Rule 12", value: "• No spamming in text channels - This includes copypasta and large paragraphs. Spamming does NOT level you up any quicker, you gain XP once every minute." },
                { name: "Rule 13", value: "• Racism/Sexism/Homophobia will be allowed within memes and memes only, and not in chat. Do not cross the line" },
                { name: "Rule 14", value: "• No Porn/Nudity/Gore - This can result in a ban. If uncertain, ask a mod BEFORE posting (This includes both through dms and everything within the server. Such as emotes, profile pictures, etc...)" },
                { name: "Rule 15", value: "• No talk or joking about rape, at all" },
                { name: "Rule 16", value: "• No Doxing - Do not share, or ask for, the personal information of anyone inside/outside of the community." },
                { name: "Rule 17", value: "• No Swat/DDoS threats even if is a joke. This is not tolerated within this server." },
                { name: "Rule 18", value: "• Use the channels only for topic-related chats." }
            )
        message.channel.send(newEmbed);
        console.log(`The 'rules' command has been ran.`);
    }
}