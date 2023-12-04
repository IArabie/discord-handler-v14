import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js';
import Bot from '../Bot';

export default {
    data: new SlashCommandBuilder()
        .setName('discord')
        .setDescription('discord-handler'),

    runner: async(Client: Bot, Interaction: ChatInputCommandInteraction) => {
        Interaction.reply({ content: 'Hi' })
    }
}