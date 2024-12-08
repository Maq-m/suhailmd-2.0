const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_02_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgzLFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1LFxuICAgICAgICA0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MSxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIsXG4gICAgICAgIDc3LFxuICAgICAgICA1LFxuICAgICAgICAxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic2dXdTBrTlhqYWRRc0JuVFFxNHBndlkvQjJ1UExLa1M2ZVdkU2pzamNXcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjY2MDU5MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgyNzVFQjlDNjBGRkMzREU5NkVCNTg5RkVFM0RCRkQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY4ODEzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1NFo2bHA3Y1ExNmF1cGoxRnV2X05nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1NDc3Nzc4LTY4NzMtNDU1My04MTVhLTRiMjc2OWYzZDlmMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAzNixcbiAgICAgIDg5LFxuICAgICAgOTIsXG4gICAgICAxOTgsXG4gICAgICAxNDMsXG4gICAgICAxMzcsXG4gICAgICAyLFxuICAgICAgMTcwLFxuICAgICAgODMsXG4gICAgICAzLFxuICAgICAgMjMwLFxuICAgICAgODgsXG4gICAgICA3MixcbiAgICAgIDE4LFxuICAgICAgMTY3LFxuICAgICAgMTQwLFxuICAgICAgMTUyLFxuICAgICAgOTgsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAyOCxcbiAgICAgIDE1OCxcbiAgICAgIDIzMCxcbiAgICAgIDU3LFxuICAgICAgMTYsXG4gICAgICAyMzgsXG4gICAgICAzLFxuICAgICAgMTM5LFxuICAgICAgMTA3LFxuICAgICAgNDgsXG4gICAgICA5MyxcbiAgICAgIDEyMSxcbiAgICAgIDE0LFxuICAgICAgMTk4LFxuICAgICAgMTA5LFxuICAgICAgMzEsXG4gICAgICA0NCxcbiAgICAgIDI0OSxcbiAgICAgIDExNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3U05HR1ZUUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzI2NjA1OTE1OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzMTM0NDk5ODg5NTg1NTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01ubzI1WUNFTGoyMTdvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRHZjYlpUMFpQSlhaV2FEZ3VGQ3d2YzRGbGRMNUM4eldLcWlVWGxiSEZpQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1RXEwVXFmMElqbzNaUHE3Ui9rZ25lM1ZraVc5c2VYQ05lcW1mNWIyZTlzbE5JNkRaMWxMSWRmZE0vMGt4UHZoNGd1Ym9mSzR1YXVaNjZYVHZvNmhCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwRjBodE9kSGcrSFZMQ0poNExRQ0VySEtvako3aFh4ZkdudWdBbXFzeTlMQWlxWUtyR0dScEpOMlpiUm8vSEtyUHJTUmtnSUlQVTE4b21JTGxoL01EQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjY2MDU5MTU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY4ODEyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg1MlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDUyLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGNZWXBhblMwOW9ZME15UmtXaVl4WXJVY1p4a3I4UTdUdSt3OVlNYS9Kcz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo1ODQ1MTI1ODMsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
