## Discord Downloader

Download a desired number of pictures previously posted in a Discord channel.

### Setup / ENV
Before you can run you must configure your `.env` file.
1. Create a discord bot [here](https://discordapp.com/developers/applications/), give it Administration permissions and add to your server.
2. Open `example.env` and rename the file to `.env`.
3. Copy the token from the bot page and add it to your `.env` file as `DISCORD_BOT_TOKEN`.
4. Add the channel ID of the channel you wish to download from as `CHANNEL_ID`.

### How to run
Assuming you are in the correct directory and have NodeJS/NPM installed on your machine, run the following commands:
```
npm install
npm start
```