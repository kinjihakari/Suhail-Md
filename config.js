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
global.github = process.env.GITHUB || "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/kinjihakari/restless-gambler/main/ragga.jfif"; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "shdwbyt"


global.devs = "2347070124762" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348081839655,2347085936545,2347033985994,2347063265056,2348062312683";
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347070124762";




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
global.read_status_from = process.env.READ_STATUS_FROM || "2347070124762,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||
  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMjEzLFxuICAgICAgICA5NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODEsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICA5NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICA3MixcbiAgICAgICAgNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgNTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM4LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwLFxuICAgICAgICA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRaWpnSTBDcEpQczJwbkI2RThIZGZOU3FvZkk0cHVhcGRUcWhaVWdhZ01zPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItc0FKaHJRTVJaV1lrb0dkemZ0bWxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMzNDJlNzUwLWEwNTEtNDVkZC05OTQ3LTE1ZTFjZTkxOWI0ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxMDgsXG4gICAgICA1MixcbiAgICAgIDYyLFxuICAgICAgODEsXG4gICAgICAxMDksXG4gICAgICAyMTAsXG4gICAgICAxODUsXG4gICAgICAxOTIsXG4gICAgICA3NSxcbiAgICAgIDQwLFxuICAgICAgMjIyLFxuICAgICAgMjIsXG4gICAgICAxNDMsXG4gICAgICA3MCxcbiAgICAgIDI2LFxuICAgICAgMjA3LFxuICAgICAgMTU5LFxuICAgICAgMTMxLFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkzLFxuICAgICAgNzEsXG4gICAgICA0OCxcbiAgICAgIDExOSxcbiAgICAgIDI0OSxcbiAgICAgIDE2NyxcbiAgICAgIDUxLFxuICAgICAgMTkxLFxuICAgICAgNjAsXG4gICAgICAxMyxcbiAgICAgIDIyNyxcbiAgICAgIDIwNixcbiAgICAgIDE1NSxcbiAgICAgIDIxMSxcbiAgICAgIDE4OSxcbiAgICAgIDEyMSxcbiAgICAgIDQ1LFxuICAgICAgMTUwLFxuICAgICAgMjQ5LFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjFaWFNIQU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzAxMjQ3NjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NjQwMDkxMDQ2MTQwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT25Wa2EwQkVOL3lsTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMZFN0VWc1QThvVzg1TCt1ajBNVk8yUzJZUUJwbkVITCszSnVieS9za2dFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVtRHdwVGRJYmRWYlIyd3NDamQ5S0xhTENXNDVaNCtlRWt0MHlRenY2N2lLSVBWZlFGMG9LUGpTYnlCYkRGaW9aQXEwcXlPSW15aUZUZmhQdVY4bUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVaU1drWkIrTUZDM05OSlF2ckIyWWFQSU1CczRFVVh3SElJdzkyR05FdW5rdkRZek45eEtnQzNtNTdwOVdLcHFhV2o4Ly8ranVvc25rVVBqbEJmQUFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzAxMjQ3NjI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIxMDQxNjJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9";


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.8",
  caption: global.caption || "『 powered by shdwbyt 』", // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

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
