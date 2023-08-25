import { LOGGING_WEBHOOK } from "$env/static/private";

export async function load() {
    const logging_webhook: string = LOGGING_WEBHOOK;
    return {
        logging_webhook
    };
}
