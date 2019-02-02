const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
  
 
 var prefix = "$"
 
 
 
 
 
 
 
 
 client.on('message', message => {
  if (true) {
if (message.content === '$invite') {
      message.author.send(' تفضل رابط اضاف البوت حبي  |  https://discordapp.com/api/oauth2/authorize?client_id=507676841990029313&permissions=0&scope=bot ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === ".invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(true);
    }
});
 
 

 
 
 

 
 
 
 

 



     client.on('guildMemberAdd', member => {
            let channel = member.guild.channels.find('name', 'welcome');
            let memberavatar = member.user.avatarURL
            if (!channel) return;
            let embed = new Discord.RichEmbed()
                .setColor('RANDOM')
                .setThumbnail(memberavatar)
                .addField('🎽 | name :  ',`${member}`)
                .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to Cosita Network, ${member}`)
                .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                        .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                   
                        .addField("Name:",`<@` + `${member.id}` + `>`, true)
                           
                                            .addField(' Cosita Network', `${member.guild.name}`,true)
                                           
            .setFooter(`${member.guild.name}`)
                .setTimestamp()
       
            channel.sendEmbed(embed);
            });
           
            client.on('guildMemberRemove', member => {
                var embed = new Discord.RichEmbed()
                .setAuthor(member.user.username, member.user.avatarURL)
                .setThumbnail(member.user.avatarURL)
                .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
                .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
                .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
                .setColor('RED')
                .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
           
            var channel =member.guild.channels.find('name', 'welcome')
            if (!channel) return;
            channel.send({embed : embed});
            })
 

 

 
 
 
 
 
 
 
 
 
 client.on('message', message => {
var prefix = "$"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ليس لديك برمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(40000)});
  };
  
  });

 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
var prefix = "$"	 
    if(!message.channel.guild) return;
if (message.content.startsWith('.ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms")
.addField('**WebSocket:**',api + " ms")
message.channel.send({embed:embed});
}
});
 
 
 
 
 
 
 
 
 
 
 
 

  
 client.on('message', message => {
	 var prefix = "$"
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **البريفكس [$help** ' ,' **عشان تجيب الهلب والمساعدة** ')
.addField('     **(2)-$invite**  ' ,' **عشان تضيف البوت** ')
.addField('     **(3)-$clear** ' , '**عشان تمسح الشات**') 
.addField('     **(4)-$ping** ' ,' ** عشان تعرف سرعة البوت ping** ')
.addField('     **(5)-$server** ' ,' ** عشان تعرف معلومات السرفر** ')
.addField('     **(6)-$mc** ' ,' ** عشان تقفل الشات** ')
.addField('     **(7)-$un_mc** ' ,' ** عشان تفتح الشات** ')
.addField('     **(8)-$bot** ' ,' ** عشان تعرف احوال البوت  ** ')
.addField('     **(9)-$send** ' ,' ** عشان ترسل رسالة لشخص علي خاص من البوت  ** ')
.addField('     **(10)-$mute** ' ,' ** علشان تعطي ميوت لحد  ** ')   
.addField('     **(11)-$kick** ' ,' **  لطرد شخص  ** ')
.addField('     **(12)-$ban** ' ,' ** لتبنيد شخص  ** ')
.setColor('#ff0004')
  message.channel.sendEmbed(embed);
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
  var prefix = "$";
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "kick") {
   if(!message.channel.guild) return message.reply('** This command only for servers :x:**');
   const guild = message.guild;
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**ليس لديك تصريح**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**ليس لدي تصريح**");
  var user = message.mentions.users.first();
  var reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**__Mention__ A Member To Kick !**");
  if (!message.guild.member(user).kickable) return message.reply("**لا تستطيع طرد الادراره :x:**");
  message.channel.send(`**:white_check_mark: ${user.tag} Kicked Form The Server By : <@${message.author.id}> ! :airplane:** `)
  guild.owner.send(`سيرفر : ${guild.name}
**تم طرد** :${user.tag}  
**بواسطة** : <@${message.author.id}>`).then(()=>{
message.guild.member(user).kick();
  })
}
});
 
 
 
 

 
 





 
 client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});

 
 
 
 
 


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {
	  var prefix = "$"
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "ping")) {
        message.channel.sendMessage(':shield: Pong! :shield:  In `' + `${client.ping}` + ' ms`');
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', function(msg) {
	   var prefix = "$"
	   
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message => {

    if (message.content === "$mc") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
if (message.content === "$un_mc") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" ||عشان المساعدة $help || ");
    }
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
});

 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
client.on("message", message => {
 var prefix= "$";  
 if(message.content.startsWith(prefix + 'chat')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
          if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**يحتاج البوت الى خاصية` MANAGE_CHANNELS ` **").then(msg => msg.delete(6000))

                             if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**أنت ليس لديك برمشن** `ADMINISTRATOR`' );
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'chat').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporaryText : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ⏱  انتهى وقت الروم الكتابي`), 120000))  // 120000 دقيقتان
    }
    });

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 client.on('message', msg => {
 if (msg.content.startsWith('$send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let alpha = msg.mentions.members.first()
      if (!alpha) return msg.reply(`**يجب تحديد الشخص**`)
      let alphaEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "))

      client.users.get(`${alpha.id}`).send(alphaEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});
 
 
 
 
 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : cosita`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Cosita ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | Cosita Network`,"http://twitch.tv/Cosita")
client.user.setStatus("dnd")
});
 
 
 
 
 
 
 
 
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
