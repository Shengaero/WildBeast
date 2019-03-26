const { guildInfo, remove } = require('../selectors/encoder-selector.js')
module.exports = {
  meta: {
    help: 'Remove a track from the queue.',
    usage: '<queue number>',
    module: 'Music',
    level: 1,
    noDM: true
  },
  fn: async (msg, suffix) => {
    if (global.bot.voiceConnections.get(msg.channel.guild.id)) {
      if (!suffix) {
        global.i18n.send('REMOVED_TRACK_NO_SUFFIX', msg.channel, { user: msg.author })
      } else {
        if (suffix > guildInfo[msg.channel.guild.id].tracks.length) {
          // TODO Add response for when track number exceeds the queue length
        } else if (suffix === 0) {
          // TODO Add response for when current track is trying to be removed
        } else {
          await remove(msg, suffix)
        }
      }
    } else {
      global.i18n.send('VOICE_NOT_CONNECTED', msg.channel)
    }
  }
}
