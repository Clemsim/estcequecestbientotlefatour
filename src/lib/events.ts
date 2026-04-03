export interface TimeEvent {
    /** Optional weekday (0 = Sunday, 6 = Saturday). Can be a single number or an array of valid days. */
    weekday?: number | number[];
    /** Hour of the day (0–23) when this message applies. Can be a single number or a [start, end] range (inclusive). */
    hour: number | [number, number];
    /** Optional minute field. Can be a single number or a [start, end] range (inclusive). If omitted, applies to the whole hour. */
    minute?: number | [number, number];
    message: string;
}

/**
 * Add new entries here to show a different message at a given hour.
 * The first entry that matches the current day/time is used.
 * If no entry matches, the default message is shown.
 */
export const timeEvents: TimeEvent[] = [
    // Examples of new ranges features:
    // { hour: [14, 15], message: "This lasts for 2 hours (14:00 to 15:59)!" },
    // { hour: 10, minute: [15, 25], message: "Special 10-minute event! (10:15 to 10:25)" },
    // { weekday: [0, 6], hour: 12, message: "Weekend noon!" },

    {
        weekday: 0,
        hour: 19,
        message: "Peut-être l'heure de l'after cons?",
    },
    {
        weekday: 0,
        hour: [13, 17],
        message:
            "Je serai chaud de faire une p'tite coinche chez Béné, pas vous ?",
    },
    {
        weekday: 0,
        hour: 18,
        message: "Toi, moi, le perdant envoie sa tierlist à l'autre ?",
    },
    {
        weekday: 0,
        hour: 23,
        message:
            "Toujours debout à cette heure ? T'as pas sommeil? Fais un sec !",
    },
    {
        weekday: 1,
        hour: 18,
        message:
            "C'est lundi, la vie est nulle, force à ceux qui retourne au travail, heureusement qu'on va en Grèce, on va chez Béné ?",
    },
    {
        weekday: 2,
        hour: 17,
        message: "P'tite raclette?",
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
        hour: 17,
        minute: [44,46],
        message: "ya une jouab trombone?",
    },
    {
        weekday: 4,
        hour: 18,
        message:
            "C'est jeudi, c'est la répétition, et aujourd'hui on va chez Béné ? Soon ...",
    },
    {
        weekday: 4,
        hour: 19,
        minute: [0, 30],
        message: "C'est le soubassophone ou c'est toi qui est faux?",
    },
    {
        weekday: 4,
        hour: 23,
        minute: [28, 30],
        message: "Dans 28 mètres, tournez à droite !",
    },
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
        weekday: 6,
        hour: 18,
        minute: [0, 30],
        message: "Oh ouais on va chez Béné? Trop bien !",
    },
    {
        weekday: 6,
        hour: 18,
        minute: [30, 59],
        message:
            "P'tit cinéma? Tracto a dit qu'il paye sa tournée à l'Artplexe !",
    },
    {
        weekday: 6, // Saturday
        hour: [8, 12],
        message: "Escalade dans les calanques avec Lotte et Figolu?",
    },
];

export const defaultMessage = "Est-ce que c'est bientôt la Fatour ?";

export function getMessageForHour(
    hour: number,
    minute: number = 0,
    weekday?: number,
): string {
    // Si le paramètre weekday n'est pas passé (ex: depuis +page.server.ts),
    // on le récupère automatiquement avec la date actuelle.
    const currentWeekday =
        weekday !== undefined ? weekday : new Date().getDay();

    const event = timeEvents.find((e) => {
        // 1. Vérification du jour de la semaine
        if (e.weekday !== undefined) {
            if (typeof e.weekday === "number") {
                if (e.weekday !== currentWeekday) return false;
            } else if (Array.isArray(e.weekday)) {
                if (!e.weekday.includes(currentWeekday)) return false;
            }
        }

        // 2. Vérification de l'heure (nombre exact ou plage [début, fin])
        if (typeof e.hour === "number") {
            if (e.hour !== hour) return false;
        } else if (Array.isArray(e.hour)) {
            if (hour < e.hour[0] || hour > e.hour[1]) return false;
        }

        // 3. Vérification des minutes (nombre exact, plage [début, fin], ou ignoré)
        if (e.minute !== undefined) {
            if (typeof e.minute === "number") {
                if (e.minute !== minute) return false;
            } else if (Array.isArray(e.minute)) {
                if (minute < e.minute[0] || minute > e.minute[1]) return false;
            }
        }

        // Si tout correspond
        return true;
    });

    return event ? event.message : defaultMessage;
}
