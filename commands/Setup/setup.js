const { Message, Client, MessageEmbed } = require("discord.js");
const ee = require("../../settings/embed.json");

module.exports = {
  name: "setup",
  aliases: [""],
  permissions: ["MANAGE_CHANNELS"],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let botchannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

    if (!botchannel) {
      return message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor(ee.embed_color)
            .setDescription(`** You need to Mention Chat Bot Channel**`)
            .setFooter(ee.embed_footertext, ee.embed_footericon),
        ],
      });
    }

    client.setup.set(message.guild.id,{
        channel : botchannel.id,
        enable : true
    })
    
    message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor(ee.embed_color)
            .setDescription(`** Chat Bot Setup SuccessFully in Your Guild \n Channel :- ${botchannel}**`)
            .setFooter(ee.embed_footertext, ee.embed_footericon),
        ],
      });

  },
};
