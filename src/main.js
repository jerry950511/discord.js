import { Client, Events, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv'
dotenv.config()
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`正在使用 ${c.user.tag} 來登入`);
});

client.login(process.env.TOKEN);