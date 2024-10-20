//victor kk

const fs = require('fs')
const { color } = require('./lib/myfunc')

//owner
global.owner = '254113660118'
global.nomerowner = ["254113660118"]

// Apikey 

global.skizo = 'king vic'
global.casterix = 'king vic'
//watermark 
global.packname = '*vic*'
global.author = 'QUEEN_AMY'

// cpanel 
global.domain = 'https://' // victor
global.apikey2 = 'ptlc' // I love victor
global.capikey2 = 'ptla' // victor x amy 
global.eggsnya = '15' // The id eggs used if the id is 5, just leave it, don't change it
global.location = '1' // id location


global.apilinode = ''// apikey vps account linode
global.apitokendo = ''

//database 
global.urldb = ''; // just leave it blank but if you want to use the mongo database, fill in the mongo url

global.limitawal = {
    premium: "Infinity",
    monayawal: 0,
    free: 100
}

//rpg
global.buruan = {
   ikan: 5,
   ayam: 5,
   kelinci: 5,
   domba: 5,
   sapi: 5,
   gajah: 5
}
global.rpg = {
   darahawal: 100,
   energyawal: 252,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}

//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.autoViewStatus = true;       //make true to view statuses
global.unavailable = true;     
//to show your real presence  
global.available = true;   
// to show always online  
global.autoreadmessages = true;   
///To always read messages
global.chatbot = true;
global.autoreact = true;

global.welcome = true;

global.prefix = '.';

global.autoglobaltrue;

global.antilink = true;

global.antilinkkick = true;

global.antilinkwarn = true;

//_____________//
// Don't change it
global.antibot = false
//—————「 Deadline 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
