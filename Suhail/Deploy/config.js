const fs = require('fs-extra')
if (fs.existsSy bnc('.env')) require('dotenv').config({ path: __dirname + '/.env' })


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
global.owner = process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27774125845";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,277xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from = process.env.SAVE_STATUS_FROM || "null,277xxxxxxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "27774125845,277xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||
  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODcsXG4gICAgICAgIDk5LFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA3LFxuICAgICAgICA5LFxuICAgICAgICA4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMzLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODQsXG4gICAgICAgIDg1LFxuICAgICAgICA2MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA0MCxcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxLFxuICAgICAgICA0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJrUHUyblJ1dkNOWGlSeWc4TmFsOWFkNHc5UEFsWU94QWs5TlhqTjVNZ0UwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIUFpicDRfM1E4NnE5Z1hyUkl5MW9nXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjMjdlNDk3LWFiNDUtNGUwYS04NGQwLWIyMjQ3Y2QzMDdkN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAxMTgsXG4gICAgICAxMjUsXG4gICAgICA4MixcbiAgICAgIDk5LFxuICAgICAgNDYsXG4gICAgICAxMzUsXG4gICAgICAxMzgsXG4gICAgICAyMTUsXG4gICAgICAxMTEsXG4gICAgICAxMzUsXG4gICAgICAxODcsXG4gICAgICAxNDUsXG4gICAgICAxMTUsXG4gICAgICA2LFxuICAgICAgNDQsXG4gICAgICA4OSxcbiAgICAgIDY5LFxuICAgICAgODUsXG4gICAgICAxNTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU0LFxuICAgICAgMTU5LFxuICAgICAgMTMwLFxuICAgICAgMTgxLFxuICAgICAgNzYsXG4gICAgICA3NCxcbiAgICAgIDQ2LFxuICAgICAgMTQxLFxuICAgICAgMTU2LFxuICAgICAgOCxcbiAgICAgIDY1LFxuICAgICAgMTY0LFxuICAgICAgMTExLFxuICAgICAgMjA4LFxuICAgICAgMTc5LFxuICAgICAgMTA2LFxuICAgICAgMjUwLFxuICAgICAgMTg2LFxuICAgICAgMTQ0LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjg5R0VFVlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzAxMjQ3NjI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3NjQwMDkxMDQ2MTQwOjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pWa2EwQkVMMzJtN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMZFN0VWc1QThvVzg1TCt1ajBNVk8yUzJZUUJwbkVITCszSnVieS9za2dFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFRSWdvam5Ub1NnRUJBQmRIa3FKbmJERThja245dENoMzN2bkF4dk9HUndGZ3RHUnJZcVVHa3lYRkVaSXpERW5JUVRWME5nbEtzV0lrNmZTaCtjM0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkM0c1NNa1IxZTVRakZNK2d4VGVxWTRFQnVFU1BhQ0t2OE5VTDUrbk4vei9sOTZmS0MwbzBYaTVPeHFDVkYrRmE4Ykp2OWNuQUpRWmxpdUJ1ZEg0cmhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNzAxMjQ3NjI6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMTkzMjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLWnVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtadS5qc29uIjogIntcImtleURhdGFcIjpcIjhNWEdZOVljTmhUbmdxdHBMZ1BDaVNlQmExTG44TUcrU1VObHVUNU9qYTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzYzMDk2ODA5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyMTYyOTYwNjlcIn0iCn0=";


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.8",
  caption: global.caption || "『 powered by shdwbyt 』", // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

  author: process.env.PACK_AUTHER || "",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "BMW",
  ownername: process.env.OWNER_NAME || "James",


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
