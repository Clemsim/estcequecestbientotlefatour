export interface TimeEvent {
	/** Hour of the day (0–23) when this message applies */
	hour: number;
	message: string;
}

/**
 * Add new entries here to show a different message at a given hour.
 * The first entry whose `hour` matches the current server hour is used.
 * If no entry matches, the default message is shown.
 */
export const timeEvents: TimeEvent[] = [
	{ hour: 12, message: "C'est midi, tout le monde est parti !" },
	{ hour: 23, message: "C'est 23h, tout le monde va à la piscine !" }
];

export const defaultMessage = "Est-ce que c'est bientôt la Fatour ?";

export function getMessageForHour(hour: number): string {
	const event = timeEvents.find((e) => e.hour === hour);
	return event ? event.message : defaultMessage;
}
