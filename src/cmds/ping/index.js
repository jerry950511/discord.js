import { SlashCommandBuilder } from 'discord.js';

export const cmd = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('取得機器人的延遲');

export const action = async (ctx) => {
    await ctx.reply('Pong!');
}