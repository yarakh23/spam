const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("593563824800399368")
setInterval(function() {
channel.send(`ineed credits ineed credits ineed credits ineed credits ineed credits`);
}, 30)
})

client.login(process.env.BOT_TOKEN);