let handler = async (m, { conn, command }) => {
let media = gataVidMenu
let str = `💕 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎

𝙏𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙦𝙪𝙚 𝙩𝙚 𝙪𝙣𝙖𝙨 𝙖 𝙡𝙖 𝘾𝙤𝙢𝙪𝙣𝙞𝙙𝙖𝙙 𝙈𝙚𝙜𝙖𝙩𝙧𝙤𝙣 𝘽𝙤𝙩 𝙋𝙧𝙤 𝙏𝙚𝙣 𝙪𝙣 𝙗𝙪𝙚𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙚 𝙞𝙣𝙩𝙚𝙧𝙖𝙘𝙘𝙞𝙤𝙣𝙖 𝙘𝙤𝙣 𝙉𝙤𝙨𝙤𝙩𝙧𝙤𝙨. 😸

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🤖 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 : https://chat.whatsapp.com/BzVYgbNDG7VC4jZ2SFXvvl
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*Por favor, no ingresar con números de Bots, y mantener el respeto.*`
await conn.sendButton(m.chat, str, `𝙈𝙀𝙂𝘼𝙏𝙍𝙊𝙉 𝘽𝙊𝙏 𝙋𝙍𝙊\n${asistencia}\n\n` + wm, media, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🤖', '.cuentasgb'],
['𝘿𝙤𝙣𝙖𝙧 🤖', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 🤖', '/allmenu']], null, [
['𝙈𝙚𝙜𝙖𝙩𝙧𝙤𝙣 𝘽𝙤𝙩 𝙋𝙧𝙤 🤖', `${md}`]], fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙈𝙀𝙂𝘼𝙏𝙍𝙊𝙉 𝘽𝙊𝙏 𝙋𝙍𝙊\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙈𝙚𝙜𝙖𝙩𝙧𝙤𝙣 𝘽𝙤𝙩 𝙋𝙧𝙤 🤖-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
