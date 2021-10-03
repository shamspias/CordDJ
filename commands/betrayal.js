const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "betrayal",
    description: "Starts a Betrayal Game Session",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["bet"],
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

        let Invite = await message.member.voice.channel.activityInvite("773336526917861400")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Betrayal.io", "https://cdn.discordapp.com/attachments/833753190859407411/891745985141817425/Betrayal.io.png")
        .setThumbnail('https://i.postimg.cc/Ghry8Yjz/3dgifmaker34216.gif')
        .setColor("RANDOM")
        .setDescription(`Using **Betrayal.io** you can play betrayal game with your friends in a Voice Channel. Click ***Join Betrayal Game*** to join in!

        __**[Join Betrayal Game](https://discord.com/invite/${Invite.code})**__

        ⚠ **Note:** This only works in Desktop
        
        __HOW TO PLAY__

        Are you a crewmate or a betrayer? Crewmates will work together to complete tasks around the map to win, but make sure to stay alert! Betrayers among the crew will sneak around to cause disruptions and eliminate your fellow crewmates.

        Between rounds, you and your teammates will discuss who could be the betrayer. Did you see anything suspicious? Did you see someone sneaking around your eliminated crewmate? After discussing together, you will get to vote on who you think is betraying the crew. Warning: if you guess wrong and vote out an innocent crewmate, the betrayers will be even closer to winning!
        
        *[Read More](https://shrib.com/#WolfSpider5abNaZX)*
        
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

            let Invite = await member.voice.channel.activityInvite("773336526917861400")//Made using discordjs-activity package
            let embed = new MessageEmbed()
            .setAuthor("Betrayal.io", "https://cdn.discordapp.com/attachments/833753190859407411/891745985141817425/Betrayal.io.png")
            .setThumbnail('https://i.postimg.cc/Ghry8Yjz/3dgifmaker34216.gif')
            .setColor("RANDOM")
            .setDescription(`Using **Betrayal.io** you can play betrayal game with your friends in a Voice Channel. Click ***Join Betrayal Game*** to join in!
    
            __**[Join Betrayal Game](https://discord.com/invite/${Invite.code})**__
    
            ⚠ **Note:** This only works in Desktop
            
            __HOW TO PLAY__
    
            Are you a crewmate or a betrayer? Crewmates will work together to complete tasks around the map to win, but make sure to stay alert! Betrayers among the crew will sneak around to cause disruptions and eliminate your fellow crewmates.
    
            Between rounds, you and your teammates will discuss who could be the betrayer. Did you see anything suspicious? Did you see someone sneaking around your eliminated crewmate? After discussing together, you will get to vote on who you think is betraying the crew. Warning: if you guess wrong and vote out an innocent crewmate, the betrayers will be even closer to winning!
            
            *[Read More](https://shrib.com/#WolfSpider5abNaZX)*
            
            Please [Vote](https://discordbotlist.com/bots/cord-dj/upvote) me here if you like me`)

            .setFooter('Special Feature by VENOM', 'https://i.postimg.cc/7ZXQ2TQ0/VENOM-Official3-01.jpg');
            interaction.send(embed.toJSON())
        },
    },
};
