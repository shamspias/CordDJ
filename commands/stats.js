const {
    MessageEmbed
} = require("discord.js");
require("moment-duration-format");
const cpuStat = require("cpu-stat");
const moment = require("moment");
let os = require("os");
module.exports = {
    name: "stats",
    description: "Get information about the bot",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["about", "ping", "info"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */

    run: async (client, message) => {
        const {
            version
        } = require("discord.js")
        cpuStat.usagePercent(async function (err, percent, seconds) {
            if (err) {
                return console.log(err);
            }
            const duration = moment.duration(message.client.uptime).format(" D[d], H[h], m[m], s[s]");

            const embed = new MessageEmbed()
            embed.setColor("RANDOM")
            embed.setTitle(`Stats from \`${client.user.username}\``)
            embed.addFields({
                name: '<:connection2:893445552623202304> Ping',
                value: `┕\`${Math.round(client.ws.ping)}ms\``,
                inline: true
            }, {
                name: '<:live:893395587041484850> Uptime',
                value: `┕\`${duration}\``,
                inline: true
            }, )
            embed.addField("\u200b", `\u200b`, true)
            embed.addFields({
                name: '<:ram:893750674989416458> Memory Usage',
                value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\``,
                inline: true
            }, {
                name: '<:server:893448518893715456> Servers',
                value: `┕ Total \`${client.guilds.cache.size}\``,
                inline: true
            })
            embed.addField("\u200b", `\u200b`, true)
            embed.addFields({
                name: '\u200b',
                value: `\u200b`,
                inline: true
            },{
                name: '<:connection2:893445552623202304> API Latency',
                value: `┕\`${(message.client.ws.ping)}ms\``,
                inline: true
            })
            embed.addField("\u200b", `\u200b`, true)
            embed.addFields({
                name: '<:systemmessageuser:893395586965987328> Version',
                value: `┕\`v${require("../package.json").version}\``,
                inline: true
            }, {
                name: '<:discord:893450334356267018> Discord.js',
                value: `┕\`v${version}\``,
                inline: true
            })
            embed.addField("\u200b", `\u200b`, true)
            embed.addFields({
                name: '<:nodejs:893450288546086942> Node',
                value: `┕\`${process.version}\``,
                inline: true
            }, {
                name: '<:pc:893453478771458108> Platform',
                value: `┕\`${os.platform()}\``,
                inline: true
            })
            embed.addField("\u200b", `\u200b`, true)
            embed.addFields({
                name: '<:metrics:893453478603669504> CPU usage',
                value: `┕\`${percent.toFixed(2)}%\``,
                inline: true
            }, {
                name: '<:pc:893453478771458108> Arch',
                value: `┕\`${os.arch()}\``,
                inline: true
            })
            embed.addField("\u200b", `\u200b`, true)
            embed.addFields({
                name: '<:systemmessageuser:893395586965987328> CPU',
                value: `┕\`\`\`${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``,
                inline: true
            })

            embed.setFooter("Created By VENOM", 'https://i.postimg.cc/Ghry8Yjz/3dgifmaker34216.gif')

            return message.channel.send(embed);
        })
    },
    SlashCommand: {
        /**
         *
         * @param {import("../structures/DiscordMusicBot")} client
         * @param {import("discord.js").Message} message
         * @param {string[]} args
         * @param {*} param3
         */
        run: async (client, interaction) => {
            const {
                version
            } = require("discord.js")
            cpuStat.usagePercent(async function (err, percent, seconds) {
                if (err) {
                    return console.log(err);
                }
                const duration = moment.duration(client.uptime).format(" D[d], H[h], m[m], s[s]");

                const embed = new MessageEmbed()
                embed.setColor("RANDOM")
                embed.setTitle(`Stats from \`${client.user.username}\``)
                embed.addFields({
                    name: '<:connection2:893445552623202304> Ping',
                    value: `┕\`${Math.round(client.ws.ping)}ms\``,
                    inline: true
                }, {
                    name: '<:live:893395587041484850> Uptime',
                    value: `┕\`${duration}\``,
                    inline: true
                }, {
                    name: '<:ram:893750674989416458> Memory',
                    value: `┕\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb\``,
                    inline: true
                })

                embed.addFields({
                    name: '<:server:893448518893715456> Servers',
                    value: `┕\`${client.guilds.cache.size}\``,
                    inline: true
                }, {
                    name: '<:connection2:893445552623202304> API Latency',
                    value: `┕\`${(client.ws.ping)}ms\``,
                    inline: true
                })
                embed.addFields({
                    name: '<:systemmessageuser:893395586965987328> Version',
                    value: `┕\`v${require("../package.json").version}\``,
                    inline: true
                }, {
                    name: '<:discord:893450334356267018> Discord.js',
                    value: `┕\`v${version}\``,
                    inline: true
                }, {
                    name: '<:nodejs:893450288546086942> Node',
                    value: `┕\`${process.version}\``,
                    inline: true
                })
                embed.setFooter("VENOM is My Creator", 'https://i.postimg.cc/Ghry8Yjz/3dgifmaker34216.gif')

                return interaction.send(embed);
            })
        }
    }
};