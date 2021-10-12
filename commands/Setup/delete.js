const { Message, Client, MessageEmbed } = require("discord.js");
const ee = require("../../settings/embed.json");

module.exports = {
  name: "remove",
  aliases: [""],
  permissions: ["MANAGE_CHANNELS"],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    client.setup.clear(message.guild.id, {
      enable: false,
    });
    client.setup.set(message.guild.id, {
      enable: false,
    });
    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setColor(ee.embed_color)
          .setDescription(`** Chat Bot Deleted SuccessFully in Your Guild **`)
          .setFooter(ee.embed_footertext, ee.embed_footericon),
      ],
    });
  },
};
