const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || "https://suhail-md-4fvm.onrender.com"                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://admin:admin@cluster0.yln1igg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_22_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICAzMixcbiAgICAgICAgMTMyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTExLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNixcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDY1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDcyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcInBaU0kyUldhcmMvOW9Yb3I2S0toR3JhUVljcE9YRkpvS2l1MUxWL1hUUWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImttSWQ2ekV4VFE2UGZkbEluY3ZORHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzhmNWJhN2MtMWI3YS00ZjlmLTlhYTktODhjYzdiOGE3NTQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMjAzLFxuICAgICAgMTk2LFxuICAgICAgMTkwLFxuICAgICAgODAsXG4gICAgICAyMjcsXG4gICAgICAyMTUsXG4gICAgICAxODAsXG4gICAgICA5MixcbiAgICAgIDE1MixcbiAgICAgIDE2LFxuICAgICAgMTUyLFxuICAgICAgMjMwLFxuICAgICAgMTMzLFxuICAgICAgODcsXG4gICAgICAxNDcsXG4gICAgICAyMSxcbiAgICAgIDc2LFxuICAgICAgNjgsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMDksXG4gICAgICAyMjAsXG4gICAgICAyMjksXG4gICAgICA2MSxcbiAgICAgIDYwLFxuICAgICAgNjMsXG4gICAgICAxNzUsXG4gICAgICA3NSxcbiAgICAgIDY0LFxuICAgICAgMTc1LFxuICAgICAgMTAyLFxuICAgICAgMjE1LFxuICAgICAgMjE4LFxuICAgICAgNzksXG4gICAgICAyMDQsXG4gICAgICAxNDEsXG4gICAgICAxMTIsXG4gICAgICAxMSxcbiAgICAgIDE1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKOFNGV1JZUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwODE0NDI4ODoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ3MDAzOTk2NjQzNTA4OjEyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInNoYWRvd2J5dGVlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0hWa2EwQkVPMlhuYklHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMZFN0VWc1QThvVzg1TCt1ajBNVk8yUzJZUUJwbkVITCszSnVieS9za2dFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpuWGc4V3FiaXprTWxOd3h4b3JJN3Rwa2VyRzJqUVlDWmhnRHFBY3JDalJzYWRYbXdxd3VLcWlmREMvR213UzVPMXR1bC9URjhzUHNDNktUeGYyZkRnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhhOFcxcUxiWWpVdGFDVGNpZmxvVnRmazZUd2FHZHFUbTZVdnBjUlZETGZ2aXl2RDdPR2pVMXBUTWdpU1lSN094QU1RdXQyYzNqUnRTTE96QjVNNWl3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDgxNDQyODg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1OTQ4NTI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3MyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDczIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4UDVkM09LNEFIZVJYRHMrRUJWd2RUeENCTVBuK3RkY1orV3RxRmk0SFk4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2MzA5NjgwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0MTQ2OTI4NjYyXCJ9Igp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
