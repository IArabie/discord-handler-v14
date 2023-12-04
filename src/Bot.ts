import 'dotenv/config';
import { 
    ChatInputCommandInteraction, 
    Client, 
    Collection, 
    GatewayIntentBits 
} from 'discord.js';

export default class extends Client {
    public interactionCommand: Collection<string, ChatInputCommandInteraction>;
    public constructor() {
        super({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages
            ]
        });

        this.interactionCommand = new Collection();
    }

    public connect() {
        this.login(process.env.CLIENT_TOKEN).then(() => {
            console.log(`${this.user?.username} is Online!`);
        });
        this.handler();
    }

    public async handler() {
        const {
            default: module
        } = await import(`${process.cwd()}/src/Handler/Index.ts`);
        module(this);
    }
};