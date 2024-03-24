const { Client, Collection, IntentsBitField } = require("discord.js");
const TOKEN = process.env["TOKEN"];
const SERVERID = process.env["SERVERID"];

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.commands = new Collection();

client.on("ready", (c) => {
  console.log(`Client tag  + ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  console.log(JSON.stringify(msg));
  console.log(`HOLA`);
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login(TOKEN);
