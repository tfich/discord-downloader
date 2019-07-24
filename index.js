const { Client } = require('discord.js')
const prompts = require('prompts')
const signale = require('signale')
require('dotenv').config()

const fetchPics = require('./utils/fetch-pics')
const downloadPics = require('./utils/download-pics')

const { CHANNEL_ID, DISCORD_BOT_TOKEN } = process.env

async function main() {
    const client = new Client()
    await client.login(DISCORD_BOT_TOKEN)

    const { numPics } = await prompts({
        name: 'numPics',
        type: 'number',
        message: 'How many pictures would you like to download?',
        validate: v => v > 0 && v <= 1000 ? true : 'Please provide a number between 0-1000.'
    })

    const channel = await client.channels.get(CHANNEL_ID)
    const picUrls = await fetchPics(channel, numPics)

    signale.success(`Successfully fetched ${picUrls.length} photos. Preparing download...`)

    await downloadPics(picUrls)

    await client.destroy()
}

if (CHANNEL_ID && DISCORD_BOT_TOKEN) {
    main()
} else {
    signale.fatal('Please create a .env with CHANNEL_ID & DISCORD_BOT_TOKEN!')
    process.exit(0)
}