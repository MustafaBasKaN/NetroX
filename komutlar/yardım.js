const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `:point_right: p!banned = Dene ve Gör! \n:point_right: p!avatarım = Avatarınınızı Gösterir. \n:point_right: p!herkesebendençay = Herkese Çay Alırsınız. \n:point_right: p!koş = Koşarsınız.\n:point_right: p!çayiç = Çay İçersiniz. \n:point_right: p!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n:point_right: p!çayaşekerat = Çaya Şeker Atarsınız. \n:point_right: p!yumruh-at = Yumruk Atarsınız. \n:point_right: p!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \n:point_right: p!sunucuresmi = BOT Sunucunun Resmini Atar. \n:point_right: p!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \n:point_right: p!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Moderator Komutları**", `:point_right: p!ban = İstediğiniz Kişiyi Sunucudan Banlar. \n:point_right: p!kick  = İstediğiniz Kişiyi Sunucudan Atar. \n:point_right: p!unban = İstediğiniz Kişinin Yasağını Açar. \n:point_right: p!sustur = İstediğiniz Kişiyi Susturur. \n:point_right: p!oylama = Oylama Açar. \n:point_right: p!otorol  = OtoRol vermeye yarar. \n:point_right: p!vkanal  = Hoşgeldin-Görüşürüz için kanal adını "hosgeldin" yapman yeterli! \n:point_right: p!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", ":point_right: p!yardım = BOT Komutlarını Atar. \n:point_right: p!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n:point_right: p!ping = BOT Gecikme Süresini Söyler. \n:point_right: p!davet = BOT Davet Linkini Atar. \n:point_right: p!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcım**", " **MustafaBasKaN#3110** ")
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