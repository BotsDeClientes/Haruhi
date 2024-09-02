let media = './media/menus/Menu1.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `=͟͟͞͞❄️ 𝗩𝗲𝗻𝗱𝗼 𝗯𝗼𝘁 𝗽𝗮𝗿𝗮 𝗴𝗿𝘂𝗽𝗼𝘀 !
*︶︶︶︶︶︶︶︶︶︶︶︶︶︶*
𐙚 𝖡𝗈𝗍 𝖿𝗅𝗎𝗂𝖽𝗈.
𐙚 𝖡𝗈𝗍 𝖺𝖼𝗍𝗂𝗏𝗈 𝟤𝟦/𝟩. 
𐙚 𝖦𝗋𝗎𝗉𝗈 𝖽𝖾 𝗉𝗋𝗎𝖾𝖻𝖺.
𐙚 𝖬𝗎́𝗅𝗍𝗂𝗉𝗅𝖾𝗌 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌.
𐙚 𝖯𝖾𝗋𝗆𝖺𝗇𝖾𝗇𝗍𝖾 𝗒 𝗆𝖾𝗇𝗌𝗎𝖺𝗅.
𐙚 𝖤𝗍𝗂𝗊𝗎𝖾𝗍𝖺𝗌, 𝖽𝖾𝗌𝖼𝖺𝗋𝗀𝖺𝗋 𝗆𝗎́𝗌𝗂𝖼𝖺, 𝖼𝗁𝖺𝗍 𝗀𝗉𝗍, 𝖾𝗍𝖼.
𐙚 Comandos De Free Fire

❄️ 𝗖𝗼𝗻𝘀𝘂𝗹𝘁𝗮𝗿 𝗽𝗿𝗲𝗰𝗶𝗼𝘀 🇵🇪🇨🇱💎 ⨾
╰ Wa.me/+51918425805
╰ https://chat.whatsapp.com/BzVYgbNDG7VC4jZ2SFXvvl`
await conn.sendButton(m.chat, str, `𝙈𝙀𝙂𝘼𝙏𝙍𝙊𝙉 𝘽𝙊𝙏 𝙋𝙍𝙊\n${asistencia}\n\n` + wm, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🤖', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 🤖', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 🤖', '/menu']], null, [
['𝘿𝙤𝙣𝙖𝙧 🤖', `https://paypal.me/YallicoPe`]], fkontak)}
/*conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝙈𝙀𝙂𝘼𝙏𝙍𝙊𝙉 𝘽𝙊𝙏 𝙋𝙍𝙊`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}*/
/*conn.sendHydrated(m.chat, str, `𝙈𝙀𝙂𝘼𝙏𝙍𝙊𝙉 𝘽𝙊𝙏 𝙋𝙍𝙊\n${asistencia}\n\n` + wm, media, 'https://paypal.me/OficialGD', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^comprarbot|comprarbot|comprarbot$/i
handler.exp = 80
export default handler
