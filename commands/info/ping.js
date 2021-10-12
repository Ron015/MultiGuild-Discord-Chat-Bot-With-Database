const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  aliases: ["p"],
  permissions: ["SEND_MESSAGES"],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    message.channel
      .send({
        embeds: [new MessageEmbed().setDescription(`Pinging.....`)],
      })
      .then((msg) => {
        msg.edit({
          embeds: [
            new MessageEmbed().setDescription(
              `>>> Ping :- \`${client.ws.ping}\``
            ),
          ],
        });
      });
  },
};
