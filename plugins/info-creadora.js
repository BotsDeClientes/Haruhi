let media = 'https://qu.ax/aWfQ.mp4'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `
𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝘼𝙡 𝙎𝙞𝙩𝙞𝙤 𝘿𝙚 𝙈𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 🤖👑

𝙀𝙣 𝙀𝙨𝙩𝙚 𝘼𝙥𝙖𝙧𝙩𝙖𝙙𝙤 𝙀𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙧𝙖𝙨 𝙏𝙤𝙙𝙤 𝙏𝙞𝙥𝙤 𝘿𝙚 𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤 𝘿𝙚 𝙈𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧 𝙔𝙖𝙡𝙡𝙞𝙘𝙤 👑

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 : wa.me/51918425805
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢 : https://instagram.com/yallico.owner
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 : https://www.facebook.com/profile.php?id=100094780575612
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙂𝙧𝙪𝙥𝙤 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 : https://chat.whatsapp.com/FyxDHzo3BpE20gyWVJdDHn
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝘾𝙖𝙣𝙖𝙡 𝙊𝙛𝙞𝙘𝙞𝙖𝙡 : https://whatsapp.com/channel/0029VaiHa0GJkK7If3ctDH0g
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendButton(m.chat, str,igfg, media, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🤖', '.grupos'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ 🤖', '.menu']], null, [
['𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 🤖', `https://wa.link/pbq5lz`]], fkontak)}
handler.command = /^owner|creador$/i
handler.exp = 80
export default handler
