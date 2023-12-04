import Bot from '../Bot';
import { promisify } from 'util'
import { glob } from 'glob'

export default async(bot: Bot) => {
    const handler = promisify(glob);

    /**
     * @InteractionCommands
     */

    const interactionCommands = await handler(`${process.cwd()}/src/Commands/*.ts`);
    const Commands: any = []
    interactionCommands.map((Cmd) => {
        const Command = require(Cmd);
        if(!Command.default.data) return;
        Commands.push(Command.default.data);
        bot.interactionCommand.set(Command.default.data.name, Command);
    });

    bot.on('ready', async() => {
        bot.application?.commands?.set(Commands);
    });

    /**
     @Events
     */

    const Events = await handler(`${process.cwd()}/src/Events/*.ts`);
    Events.map((Event) => import(Event));
}