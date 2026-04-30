import type { PageServerLoad } from "./$types";
import { getMessageForHour } from "$lib/events";

export const load: PageServerLoad = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const fatourStart = new Date("2027-04-23T00:00:00");
    const fatourEnd = new Date("2027-05-02T23:59:59");
    const isFatour = now >= fatourStart && now <= fatourEnd;
    const diff = fatourStart.getTime() - now.getTime();
    const daysUntilFatour = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return {
        isFatour,
        daysUntilFatour,
        message: getMessageForHour(hour, minute),
    };
};
