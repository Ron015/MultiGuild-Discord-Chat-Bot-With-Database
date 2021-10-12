const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "prefix",
  aliases: [""],
  permissions: [""],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let choice = args[0];

    if (choice === "set") {
      let newprefix = args.slice(1).join(" ");
      client.settings.set(message.guildId, newprefix, "prefix");
      message.channel.send({
        embeds: [
          new MessageEmbed().setDescription(`Prefix Changed to ${newprefix}`),
        ],
      });
    } else if (choice === "reset") {
      client.settings.delete(message.guildId, "prefix");
      message.channel.send({
        embeds: [new MessageEmbed().setDescription(`Prefix Reseted to !`)],
      });
    } else {
      message.channel.send(`>>> My Prefix is !`);
    }
  },
};
