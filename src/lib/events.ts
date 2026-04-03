export interface TimeEvent {
    /** Hour of the day (0–23) when this message applies */
    weekday?: number; // Optional weekday field (0 for Sunday, 6 for Saturday)
    hour: number;
    minute?: number; // Optional minute field for more precise timing
    message: string;
}

/**
 * Add new entries here to show a different message at a given hour.
 * The first entry whose `hour` matches the current server hour is used.
 * If no entry matches, the default message is shown.
 */
export const timeEvents: TimeEvent[] = [
    //{ hour: 12, message: "C'est midi, tout le monde est parti !" },
    //{ hour: 14, minute: 23, message: "C'est moi ou ça pue?" },
    //{ hour: 14, message: "C'est 14h, tout le monde est parti !" },
    //{ hour: 23, message: "C'est 23h, tout le monde va à la piscine !" },
    {
        weekday: 5, // Friday
        hour: 17,
        message: "Ptit crous avant d'aller à la plage?",
    },
    {
        weekday: 5, // Friday
        hour: 17,
        message: "C'est 17h le vendredi, tout le monde attend le Fatour !",
    },
    {
        weekday: 0,
        hour: 18,
        message: "Peut-être l'heure de l'after cons?",
    },
    {
        weekday: 6,
        hour: 18,
        message: "Oh ouais on va chez Béné? Trop bien !",
    },
    {
        weekday: 1,
        hour: 18,
        message:
            "C'est lundi, la vie est nulle, force à ceux qui retourne au travail, heureusement qu'on va en Grèce, on va chez Béné ?",
    },
    {
        weekday: 2,
        hour: 18,
        message:
            "C'est mardi, la vie commence à être mieux, on se rapproche du week-end, on va chez Béné ?",
    },
    {
        weekday: 3,
        hour: 18,
        message:
            "C'est mercredi, c'est Bar'bu, on va chez Béné aujourd'hui ou juste on bouge pas ? Triste ...",
    },
    {
        weekday: 4,
        hour: 18,
        message:
            "C'est jeudi, c'est la répétition, et aujourd'hui on va chez Béné ? Soon ...",
    },
];

export const defaultMessage = "Est-ce que c'est bientôt la Fatour ?";

export function getMessageForHour(
    hour: number,
    minute: number = 0,
    weekday: number | undefined = undefined,
): string {
    const exactMatch = timeEvents.find(
        (e) => e.hour === hour && e.minute === minute && e.weekday === weekday,
    );
    if (exactMatch) return exactMatch.message;

    const hourMatch = timeEvents.find(
        (e) => e.hour === hour && e.minute === undefined,
    );
    if (hourMatch) return hourMatch.message;

    return defaultMessage;
}
