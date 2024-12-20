import arcjet, { validateEmail } from "@arcjet/node";

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    rules: [
        validateEmail({
        mode: "LIVE",
        block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
        }),
    ],
    }
    );