import { FixSpell } from './spell-config.js'

export const fixReply = (rawText: string, botName: string) => {
  let rtnText = ''
  for (let fix of FixSpell) {
    if (fix.reg) {
      if (fix.triger.test(rawText)) {
        rtnText = fix.spell.replaceAll('牛牛', botName)
      }
    } else {
      let triger = fix.triger
      if (fix.preBotName) triger = '@' + botName + triger
      if (rawText === triger) {
        rtnText = fix.spell.replaceAll('牛牛', botName)
      }
    }
  }
  return rtnText
}