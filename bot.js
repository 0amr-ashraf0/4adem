const Discord = require("discord.js");
const RichEmbed = require("discord.js");
const { Client, Util } = require('discord.js');
const client = new Discord.Client();
const prefix = "/";

const devs = ["484869429327560704"]

const adminprefix = "/";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
    if (message.content === (adminprefix + "Percie")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else     
    if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : Done :>`)
  return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
  } else
    if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
        } else     
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/Amr");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`:warning:️ **restarting by ${message.author.username}**`);
        console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`⚠️ restarting... ⚠️`);
        console.log("===============================================\n\n");
        client.destroy();
        child_process.fork(__dirname + "/bot.js");
        console.log(`Successfully Restarted`);
    }
  
  });//✮𝙈𝙚𝙧𝙤 𝘾𝙤𝙙𝙚𝙨✮
client.on('message', message => {//Toxic Codes
    if (message.author.bot) return;
     if (message.content === prefix + "email") {//Toxic Codes
function randomem() {//Toxic Codes
let email = '';//Toxic Codes
const n3k4a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._"\'';
for (let i = 0; i < 5; i++) email += n3k4a.charAt(Math.floor(Math.random() * n3k4a.length));//Toxic Codes
return email//Toxic Codes
}//Toxic Codes//Toxic Codes
function randompass() {//Toxic Codes
let pass = '';//Toxic Codes
const Toxic Codes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?@#$%&()-_"\'';//Toxic Codes
for (let i = 0; i < 8; i++) pass += Toxic Codes.charAt(Math.floor(Math.random() * Toxic Codes.length));//Toxic Codes
return pass;
}
const random1 = randomem();//Toxic Codes//Toxic Codes
const random2 = randompass();//Toxic Codes
message.author.send(`------------------------//Toxic Codes
email : **${random1}@gmail.com**//Toxic Codes
password : **${random2}**//Toxic Codes
------------------------`).catch(err => {//Toxic Codes
   if(err == "DiscordAPIError: Cannot send messages to this user") {//Toxic Codes
      return message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **");//Toxic Codes
}//Toxic Codes
});//Toxic Codes
//Toxic Codes
message.channel.send("**تم الارسال الحساب في الخاص | ☑ **")//Toxic Codes
});//Toxic Codes
  client.login("NDg0ODY5NDI5MzI3NTYwNzA0.DwOlgA.P3lGk6pnxDiYnaW_LUW24fbqhbE");
