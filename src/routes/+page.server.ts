import type { PageServerLoad } from "./$types";
import { getMessageForHour } from "$lib/events";

export const load: PageServerLoad = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const fatourStart = new Date("2026-04-17");
    const diff = fatourStart.getTime() - now.getTime();
    const daysUntilFatour = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return {
        daysUntilFatour,
        message: getMessageForHour(hour, minute),
    };
};
