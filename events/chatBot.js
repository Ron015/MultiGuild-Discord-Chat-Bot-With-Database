const client = require("../index");
const fetch = require("node-fetch");

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot) return;
  let data2 = client.setup.get(message.guild.id);
  if (data2.enable === false) return;
  if (message.channel.id === data2.channel) {
    fetch(
      `https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(
        message.content
      )}&botname=Tech Boy&ownername=Kabir Singh&user=1`
    ).then(async (res) => {
      let data = await res.json();
      message.channel.send(`\`${data.message}\``);
    });
  }
});
