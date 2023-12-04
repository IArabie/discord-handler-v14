import bot from '../../Index';

bot.on('interactionCreate', async(Interaction) => {
    if(!Interaction.isChatInputCommand()) return;
    const Command: any = await bot.interactionCommand.get(Interaction.commandName);
    if(!Command) return;
    Command?.default?.runner(bot, Interaction);
})