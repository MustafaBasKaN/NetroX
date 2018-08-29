const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `:point_right: n!banned = Dene ve Gör! \n:point_right: n!avatarım = Avatarınınızı Gösterir. \n:point_right: n!herkesebendençay = Herkese Çay Alırsınız. \n:point_right: n!koş = Koşarsınız.\n:point_right: n!çayiç = Çay İçersiniz. \n:point_right: n!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n:point_right: n!çayaşekerat = Çaya Şeker Atarsınız. \n:point_right: n!yumruh-at = Yumruk Atarsınız. \n:point_right: n!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n:point_right: n!sunucuresmi = BOT Sunucunun Resmini Atar. \n:point_right: n!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n:point_right: n!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Moderator Komutları**", `:point_right: n!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n:point_right: n!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n:point_right: n!unban = İstediğiniz Kişinin Yasağını Açar. \n:point_right: n!sustur = İstediğiniz Kişiyi Susturur. \n:point_right: n!oylama = Oylama Açar. \n:point_right: n!otorol  = OtoRol vermeye yarar. \n:point_right: n!vkanal  = Hoşgeldin-Görüşürüz için kanal adını "hosgeldin" yapman yeterli! \n:point_right: n!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", ":point_right: n!yardım = BOT Komutlarını Atar. \n:point_right: n!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n:point_right: n!ping = BOT Gecikme Süresini Söyler. \n:point_right: n!davet = BOT Davet Linkini Atar. \n:point_right: n!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcım**", " **NetroX Corp.** ")
  .setFooter('**Eklenmesini İstediğiniz Komutları Yöneticiye bildirin. <--**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
