import { ChatGPTBot } from "./bot.js";
import { config } from "./config.js";
import inquirer from 'inquirer'
const chatGPTBot = new ChatGPTBot()

chatGPTBot.setBotName('牛牛')

class Message {
  t = ''
  talker() {
    return {
      name() {
        return 'dylan'
      },
      self() {
      },
      say(msg: string) {
        console.log(msg)
      },
    }
  }
  setText(te: string) {
    this.t = te
  }
  text() {
    return this.t
  }
  type() {
    return 7
  }
  room() {
    return false
  }

}

const main = async (text: string) => {
  const message = new Message()
  message.setText(text)
  await chatGPTBot.onMessage(message as any)
}

const initInquirer = async () => {
  while (true) {
    try {
      let res = await inquirer
        .prompt([
          {
            type: 'input',
            name: 'value',
            message: '请输入您的聊天',
            default: true
          }
        ])
      let message = res.value
      await main(message)
    } catch (error) {
      console.log(error)
    }
  }

}

initInquirer()