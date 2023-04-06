import { FixSpell } from './spell-config.js'

export const fixReply = (rawText: string) => {
  let rtnText = ''
  for (let fix of FixSpell) {
    if (fix.reg) {
      if (fix.triger.test(rawText)) {
        rtnText = fix.spell
      }
    } else {
      if (rawText === fix.triger) {
        rtnText = fix.spell
      }
    }
  }
  return rtnText
}