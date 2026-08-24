
require('dotenv').config();
const {Telegraf} = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)


const binarySearch = `
    let arr[]=[1,2,3,4,56,7]
    let start = 0;

    int end = 5;
    while(start<end){

        let mid = (end-start)/2 + start;

        if(arr[mid]= 7){

            return mid;

        }
        else if(arr[mid]<7){

        start= mid+1;

        }
        else{

            end = mid-1;

        }
    }
        return -1;
`

try {
    console.log('bot has been started')
    bot.start((ctx)=> ctx.reply("Welcome to Marco Bot"));
    bot.command('binarySearch',(ctx)=> ctx.reply(binarySearch));

    bot.on('sticker',(ctx)=>ctx.reply('✌️'))

    // bot.on('emoji',(ctx)=>console.log('emoji'))

    bot.on('text',(ctx)=>ctx.reply("hello World"));
    bot.launch();
    
} catch (error) {
    console.log("unExpected Command",error)
}