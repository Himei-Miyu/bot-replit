import "discord.js";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string;
        }
    }
}
