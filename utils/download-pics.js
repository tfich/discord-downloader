const download = require('image-downloader')
const fs = require('fs')
const moment = require('moment-timezone')
const path = require('path')
const signale = require('signale')

const DOWNLOAD_PATH = path.join(__dirname, '../downloads')
if (!fs.existsSync(DOWNLOAD_PATH)) { fs.mkdirSync(DOWNLOAD_PATH) }

async function downloadPics(picUrls) {
    const newFolder = `${DOWNLOAD_PATH}/${moment().format('lll')}`
    if (!fs.existsSync(newFolder)) { fs.mkdirSync(newFolder) }

    let c = 0
    for (url of picUrls) {
        await download.image({ url, dest: `${newFolder}/pic-${c++}.jpg` })
        signale.success(`Successfully downloaded image ${c}/${picUrls.length}!`)
        /* Sleeps every 50 downloads to prevent rate limit */
        if (c % 50 === 0) {
            signale.pause('Sleeping for 2.5 seconds...')
            await new Promise(r => { setTimeout(r , 2500) })
        }
    }
}

module.exports = downloadPics
