const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname + '/.env' })


//═══════[Required Variables]════════\\
global.audio = "";
global.video = "";
global.port = process.env.PORT
global.appUrl = process.env.APP_URL || ""                       // put your app url here,
global.email = "saimsamsun789@gmail.com"
global.location = "Lahore,Pakistan."


global.mongodb = process.env.MONGODB_URI || "mongodb+srv://admin:admin@flip.dzw1zls.mongodb.net/?retryWrites=true&w=majority&appName=flip"
global.allowJids = process.env.ALLOW_JID || "null"
global.blockJids = process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/ProCode47";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va4K0PZ5a245NkngBA2M";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va4K0PZ5a245NkngBA2M";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/kinjihakari/restless-gambler/main/ragga.jfif"; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "shdwbyt"


global.devs = "2348108144288" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348081839655,2347085936545, 2347033985994, 2347063265056";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348108144288";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE || Math.floor(Math.random() * 6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false";
global.wlcm = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

  global.MsgsInLog = process.env.MSGS_IN_LOG || "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages = process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence = process.env.WAPRESENCE || "null"; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from = process.env.SAVE_STATUS_FROM || "null,234xxxxxxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "2348108144288,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||
  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDksXG4gICAgICAgIDQxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA2NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDg5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUzLFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgzLFxuICAgICAgICA5NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDUxLFxuICAgICAgICA5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaVZQSUhPdDNtTXQ1MDlsUWhaQ1ZTWTdFbmRacE5PUFdmTWpiYmlLYkgzQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTA4MTQ0Mjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJFQ0I4NzI0OTcxNDQzRTZGMkRCNjEyRTcwMTE0ODAwNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2MDE4MDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOExwSVZpQzlUdXFXNHlwdkxhVnBpZ1wiLFxuICBcInBob25lSWRcIjogXCJhOTVmMjQ1MC0yMGFlLTQ5OTMtYTJmOS0yM2QzNDQ0M2E1YzBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTQsXG4gICAgICAxNzMsXG4gICAgICAxMTYsXG4gICAgICAxMTMsXG4gICAgICAxNjQsXG4gICAgICAyNTMsXG4gICAgICAxMzYsXG4gICAgICAyNDksXG4gICAgICAxNDAsXG4gICAgICA3MSxcbiAgICAgIDExLFxuICAgICAgMTM5LFxuICAgICAgMjUxLFxuICAgICAgNSxcbiAgICAgIDEyLFxuICAgICAgMTA4LFxuICAgICAgMzIsXG4gICAgICAxODAsXG4gICAgICAxM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzgsXG4gICAgICA0OSxcbiAgICAgIDE0MyxcbiAgICAgIDIwMSxcbiAgICAgIDE4OCxcbiAgICAgIDExNSxcbiAgICAgIDI1MixcbiAgICAgIDEyMixcbiAgICAgIDE1MyxcbiAgICAgIDI2LFxuICAgICAgOTksXG4gICAgICA2NSxcbiAgICAgIDIzMyxcbiAgICAgIDIyLFxuICAgICAgMTkyLFxuICAgICAgMTQwLFxuICAgICAgOCxcbiAgICAgIDEyMixcbiAgICAgIDE5MCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZWEVCTlA4RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwODE0NDI4ODoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ3MDAzOTk2NjQzNTA4OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qVmthMEJFSWVlOXJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTGRTdFVnNUE4b1c4NUwrdWowTVZPMlMyWVFCcG5FSEwrM0p1Ynkvc2tnRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlQnJoTFZWcWtaNEY3NXZPSS9kZHZoV3NOamJPMWVjeHhrVWFlUWhmbzFxQmRlZm1DbDB5TlNNUjh5L3Rkdmk2aXRReWdmSk5qdVFtV3VjY0ZIUUFDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI0Z01IWkNKUFh2SlhMdi9idS85dnBTOGhpT0J4b2M2VHhETXQyTEZHQzN2UHdnM1hPRCt2K1VJcFJ2RnUrVjRFVGhaSTgxdDNjMFAyeXBMdjVDdVNBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA4MTQ0Mjg4OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTYwMTgwMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtyeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS3J5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwid1J2elhqc1MrTTdLeHRyS2tyQldWZU1xQ2hPZ0dZRTUweUtHeVhCWTJlQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNjMwOTY4MDcsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQsNSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5MjIyNTkyNTFcIn0iCn0=";


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.8",
  caption: global.caption || "『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ shdwbyt 』", // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author: process.env.PACK_AUTHER || "",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "shdw",
  ownername: process.env.OWNER_NAME || "shdw",


  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",

  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "SUHAIL").toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID || "37";





















global.rank = "updated"
global.isMongodb = false;
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update'${__filename}'`); delete require.cache[file]; require(file); })


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
