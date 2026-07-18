import { z } from "zod";

export const RSVPValidation = z.object({

    name: z
        .string()
        .min(2, "Please enter your name."),

    phone: z
        .string()
        .min(6, "Please enter a valid phone number."),

    guests: z
        .number()
        .min(1),

    arrivalDate: z.string(),

    arrivalTime: z.string(),

    specialRequest: z.string().optional(),

});

export type RSVPFormData =
    z.infer<typeof RSVPValidation>;
