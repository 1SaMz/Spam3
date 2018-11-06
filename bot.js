const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "475418915321806851"; // 
var channel = "509318331732590592";//
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**-- Lucas - lucas - Lucas - Lucas - Lucas - Lucas - Lucas - Lucas - Lucas --**')
    },305);
})

client.login(process.env.BOT_TOKEN);