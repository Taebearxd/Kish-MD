const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['917439317360']
global.ownername = "𝚫𝐃𝐑𝐈𝚵𝚴"//owner name
global.ytname = "YT: KishBotz.inc"
global.socialm = "GitHub: Kish-MD"
global.location = "India"

global.botname = 'KISH-MD' //name of the bot

//sticker details
global.stickername = '𝆺𝅥 𝇁 ֹ  𝄄 س ꓹ 𝚫𝐃𝐑𝐈𝚵𝚴 𓂃🧣'
global.packname = 'Sticker By'
global.author = '𝆺𝅥 𝇁 ֹ  𝄄 س ꓹ 𝚫𝐃𝐑𝐈𝚵𝚴 𓂃🧣'
//console view/theme
global.themeemoji = '🧸'
global.wm = "Kish botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/EZjCgLTJfRd8LHOyVC163u'

//custom prefix
global.prefix = ['.']

//false=disable and true=enable
global.welcome = false //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*Here you go baby!*',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
