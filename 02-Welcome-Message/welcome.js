module.exports = (client) => {
  const channelId = "872392036320415774";
  const rulesChannel = "872392036320415774";
  client.on("guildMemberAdd", (member) => {
    console.log(member);

    const message = `welcome <3 <@${
      member.id
    }> to our server! Be sure to check out our ${member.guild.channels.cache
      .get(rulesChannel)
      .toString()}`;

    const channel = member.guild.channels.cache.get(channelId);
    channel.send(message);
  });
};
