const { Client } = require('discord.js')
const prompts = require('prompts')
const signale = require('signale')
require('dotenv').config()

const fetchPics = require('./utils/fetch-pics')

const { CHANNEL_ID, DISCORD_BOT_TOKEN } = process.env

async function main() {
    const client = new Client()
    await client.login(DISCORD_BOT_TOKEN)

    const { numPics } = await prompts({ type: 'number', name: 'numPics', message: 'How many pictures would you like to download?' })

    const channel = await client.channels.get(CHANNEL_ID)
    const picUrls = await fetchPics(channel, numPics)
    console.log(picUrls)

    await client.destroy()
}

if (CHANNEL_ID && DISCORD_BOT_TOKEN) {
    main()
} else {
    signale.error('Please create a .env with CHANNEL_ID & CHANNEL_ID!')
    process.exit(0)
}