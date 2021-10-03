const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "poker",
    description: "Starts a Poker session",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: [],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **You must be in a voice channel to play something!**");
        if(!message.member.voice.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(message.channel, "❌ | **Bot doesn't have Create Invite Permission**");

        let Invite = await message.member.voice.channel.activityInvite("755827207812677713")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Poker Together", "https://cdn.discordapp.com/attachments/833753190859407411/891750573387436102/com.gamesofa.android.luxytexasholdem.icon.2021-04-28-15-38-39.png")
        .setThumbnail('https://i.postimg.cc/Ghry8Yjz/3dgifmaker34216.gif')
        .setColor("RANDOM")
        .setDescription(`Using **Poker Together** you can play Poker with your friends in a Voice Channel. Click ***Join Poker Together*** to join in!

        __**[Join Poker Together](https://discord.com/invite/${Invite.code})**__

        ⚠ **Note:** This only works in Desktop
        
        Please [Vote](https://discordbotlist.com/bots/cord-dj/upvote) me here if you like me`)

        .setFooter('Special Feature by VENOM', 'https://i.postimg.cc/7ZXQ2TQ0/VENOM-Official3-01.jpg');
        message.channel.send(embed)
    },
    SlashCommand: {
        options: [
        ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
        run: async (client, interaction, args, { GuildDB }) => {
            const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);

            if (!member.voice.channel) return client.sendTime(interaction, "❌ | You must be in a voice channel to use this command.");
            if(!member.voice.channel.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(interaction, "❌ | **Bot doesn't have Create Invite Permission**");

            let Invite = await member.voice.channel.activityInvite("755827207812677713")//Made using discordjs-activity package
            let embed = new MessageEmbed()
            .setAuthor("Poker Together", "https://cdn.discordapp.com/attachments/833753190859407411/891750573387436102/com.gamesofa.android.luxytexasholdem.icon.2021-04-28-15-38-39.png")
            .setThumbnail('https://i.postimg.cc/Ghry8Yjz/3dgifmaker34216.gif')
            .setColor("RANDOM")
            .setDescription(`Using **Poker Together** you can play Poker with your friends in a Voice Channel. Click ***Join Poker Together*** to join in!
    
            __**[Join Poker Together](https://discord.com/invite/${Invite.code})**__
    
            ⚠ **Note:** This only works in Desktop
            
            Please [Vote](https://discordbotlist.com/bots/cord-dj/upvote) me here if you like me`)

            .setFooter('Special Feature by VENOM', 'https://i.postimg.cc/7ZXQ2TQ0/VENOM-Official3-01.jpg');
            interaction.send(embed.toJSON())
        },
    },
};
