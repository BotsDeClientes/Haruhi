let media = 'https://qu.ax/aWfQ.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `
💙 𝘽𝙄𝙀𝙉𝙑𝙀𝙉𝙄𝘿𝙊(𝘼) 𝘼 𝙇𝘼𝙎 𝘾𝙐𝙀𝙉𝙏𝘼𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🤖 𝙈𝙚𝙜𝙖𝙩𝙧𝙤𝙣 𝘽𝙤𝙩 𝙋𝙧𝙤
${bot}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🤖 *INSTAGRAM*
${ig}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🤖 *FACEBOOK*
${fb}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Si tienen dudas, sugerencias, o preguntas solo escriban por Instagram*`
await conn.sendButton(m.chat, str, wm, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🤖', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 🤖', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́🤖', '/allmenu']], null, [
['𝙈𝙚𝙜𝙖𝙩𝙧𝙤𝙣 𝘽𝙤𝙩 𝙋𝙧𝙤 🤖', md]], fkontak)}
//conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)
/*conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙈𝙚𝙜𝙖𝙩𝙧𝙤𝙣 𝘽𝙤𝙩 𝙋𝙧𝙤 🤖', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^cuentasmega|account$/i
handler.exp = 35
export default handler
