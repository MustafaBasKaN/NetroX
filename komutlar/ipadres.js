client.on('message', msg => {

  if (msg.content.toLowerCase() === 'n!ip') {

    msg.channel.send(':white_check_mark: Sunucumuzun İp Adresi : **185.193.165.189** ');

  }

});
