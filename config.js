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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_17_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM1LFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICA2NixcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjMsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICAxNTksXG4gICAgICAgIDYwLFxuICAgICAgICA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE1LFxuICAgICAgICA1NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRDJ6amJIa2hKL2NUZTkxNytqVm1YVWpzMzVSRjZVcFViVmE1V2FaTWxWZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA4MTQ0Mjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDN0NDNTY5QzNBRDc0M0MxRkQwODcyQjgzODlCNjBGMFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU5NTE4NDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieWFtby1PVGxRYXFiSWxmRFc0ODgtQVwiLFxuICBcInBob25lSWRcIjogXCJhZmY4NDNiOS03YmMzLTRhNjAtYThhZC05NTViM2UyZDBmOTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAxMTgsXG4gICAgICAyNDksXG4gICAgICAyLFxuICAgICAgMTAxLFxuICAgICAgMzIsXG4gICAgICA5MyxcbiAgICAgIDQ2LFxuICAgICAgMTQ5LFxuICAgICAgMTQ0LFxuICAgICAgMCxcbiAgICAgIDIxMSxcbiAgICAgIDE3NyxcbiAgICAgIDEwMSxcbiAgICAgIDQsXG4gICAgICAyNDcsXG4gICAgICAxNDUsXG4gICAgICAxMTcsXG4gICAgICAyMzUsXG4gICAgICAyMDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAyNDQsXG4gICAgICAxODYsXG4gICAgICAxNixcbiAgICAgIDM1LFxuICAgICAgNjYsXG4gICAgICAxOTAsXG4gICAgICAzMixcbiAgICAgIDg2LFxuICAgICAgMTc3LFxuICAgICAgMjUxLFxuICAgICAgMTUxLFxuICAgICAgODUsXG4gICAgICAyMjAsXG4gICAgICA5NSxcbiAgICAgIDMyLFxuICAgICAgMTAsXG4gICAgICAxNTksXG4gICAgICAyMjYsXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLNTJSQTVLS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwODE0NDI4ODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ3MDAzOTk2NjQzNTA4OjE2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcInNoYWRvd2J5dGVlXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1RWa2EwQkVOaXhuYklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMZFN0VWc1QThvVzg1TCt1ajBNVk8yUzJZUUJwbkVITCszSnVieS9za2dFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJnbjhDZmJ3QVpnM282L0I4MDhwQTNTb2NFY3QyVTBpN3VXdFpQSVdhb2FRSFdzeUtjcHpzaHFOM3plaFNLcHdNRHR6UUlZb1RLWng1akUzWDNqekN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtUZHhHZk5iY3BuNlArK0VQaklNSkFYY3FqMFk2WEtKc1VyNm9HaEgrSkErbzcxWWQvS0NFNC9WakQ5MGl1V0FNL3hxUUYxTHI3cnl2cVpvUWQ4cGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDgxNDQyODg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1OTUxODM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3MzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDczMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwWWpCZnRpZnBPSmwzcnVJSHhIb01GdTU5Y2VHeGFoc3V3TW53c0haMzQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2MzA5NjgwMSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyLDQsNl19LFwidGltZXN0YW1wXCI6XCIxNzE1OTQ4NzMwODY4XCJ9Igp9"


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
