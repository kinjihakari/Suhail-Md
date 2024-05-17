const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://suhail-md-4fvm.onrender.com"                       // put your app url here,
global.email ="iloenyenwavictor@gmail.com"
global.location="Lagos,Nigeria"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.yln1igg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348108144288" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348108144288";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348108144288";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348108144288";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2348108144288";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348108144288";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_13_40_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQxLFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMxLFxuICAgICAgICA0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OSxcbiAgICAgICAgOTksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICA0NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTExLFxuICAgICAgICAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImowaGt6anlMdnNyWmdKdG1wNk5IZEtES2dzaXZGVVNrbTlTZ2ZrRzZkM3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEwODE0NDI4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUQ1MjI0NUQ2Mjk2NjZDNzlDQjYwRUMyNDAyQ0UwOTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1OTUzMjEyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9BY01lZUpaVGdTSWlxMWFVR0dzQkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDMyODVjZGYtMjk5MC00YWM2LWIxMGQtMDkxZWU4MWI2M2M3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMjIsXG4gICAgICAzOCxcbiAgICAgIDI1NSxcbiAgICAgIDEwMixcbiAgICAgIDIxOSxcbiAgICAgIDE0OCxcbiAgICAgIDIxNyxcbiAgICAgIDY1LFxuICAgICAgMjQsXG4gICAgICA0NyxcbiAgICAgIDIzNyxcbiAgICAgIDEwNyxcbiAgICAgIDI0NSxcbiAgICAgIDM0LFxuICAgICAgMTIwLFxuICAgICAgMjM1LFxuICAgICAgMjAwLFxuICAgICAgMjA0LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMCxcbiAgICAgIDE5MSxcbiAgICAgIDE1NCxcbiAgICAgIDIwOSxcbiAgICAgIDIwOSxcbiAgICAgIDY1LFxuICAgICAgMTQxLFxuICAgICAgMTQ1LFxuICAgICAgMTI3LFxuICAgICAgMzAsXG4gICAgICAxNzcsXG4gICAgICAxNzEsXG4gICAgICAxOTAsXG4gICAgICA3NCxcbiAgICAgIDIwNSxcbiAgICAgIDY0LFxuICAgICAgMTE4LFxuICAgICAgNzMsXG4gICAgICAzOCxcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09YVmthMEJFTFc4bmJJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGRTdFVnNUE4b1c4NUwrdWowTVZPMlMyWVFCcG5FSEwrM0p1Ynkvc2tnRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxZkZiRUFXdjFBakg2dlBoNzVWY1RnREhldUlVdnBWNWplZ2VlRTdVV3QyMFZwUXpxd1dRNHJtSHZXc3lqYWRDcVRqUmdiYlcxdHhZTmg5T293TU9BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI1emEyK08vTGhnNDFJSS9vS2Zsc1plS3dZYXhWWDhQQUJoZ3hFcTcxdWJOYUowdjlobHhZdS85dmhqVVBFUjdUQys4WkZJZ3ErQlZrRTdJSkcrZkZDdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDgxNDQyODg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NzAwMzk5NjY0MzUwODoxN0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJzaGFkb3dieXRlZVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwODE0NDI4ODoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU5NTMyMDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDczNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNzMi5qc29uIjogIntcImtleURhdGFcIjpcInhQNWQzT0s0QUhlUlhEcytFQlZ3ZFR4Q0JNUG4rdGRjWitXdHFGaTRIWTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzYzMDk2ODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTQxNDY5Mjg2NjJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDczMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwWWpCZnRpZnBPSmwzcnVJSHhIb01GdTU5Y2VHeGFoc3V3TW53c0haMzQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2MzA5NjgwMSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDQsNl19LFwidGltZXN0YW1wXCI6XCIxNzE1OTQ4NzMwODY4XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3M0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiTUUwL1NRUjJYWmdlM25ncXRwUWV3M0w4N3ZjT2prVmxiWEE3dUliWkNhYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjMwOTY4MDEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMiw0XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDczUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJkZ3ZFQ1JOejErQTB6cWJUMU1HeUgyR1R0QTlObnJXK3J2a0RPTDhlMFBnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2MzA5NjgwMSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiw0LDddfSxcInRpbWVzdGFtcFwiOlwiMTcxNTk1MDAxNTk5MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNzNi5qc29uIjogIntcImtleURhdGFcIjpcImRybTRLeUZKL2xFbVVuMFQ1VEU2M0dGUm1CTFEzekxhNCtyTytncU5xVEk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzYzMDk2ODAxLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDddfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNzNy5qc29uIjogIntcImtleURhdGFcIjpcIlJ2aEY1dC9tZ2RQK3R4cHZia09KNURNWnRxNFZFK2NTaFdsbXZaZ0Qrd2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzYzMDk2ODAxLFwiY3VycmVudEluZGV4XCI6NyxcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU5NTAwMjU4NTBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDczguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHVVZzM0QrWXhRMGpBZEk1aG85ekdLcTdXdjFLU1hycnlKTkZpelo4V0R3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2MzA5NjgwMSxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTk1MDA0OTMzMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNzOS5qc29uIjogIntcImtleURhdGFcIjpcInc0b0hCVlRCaHNiL0JuVWZxSmZTYStzYzlqd1NsNzdKR0F2dEFqbG5BbUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzYzMDk2ODAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "shdwbyt",
  packname: process.env.PACK_NAME || "shdwbyt",
  botname : process.env.BOT_NAME  || "shadowbytee",
  ownername:process.env.OWNER_NAME|| "shdwbyt",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
