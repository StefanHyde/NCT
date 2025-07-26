import { Resend } from "resend";
import { RateLimiterMemory, RateLimiterRes } from "rate-limiter-flexible";
import Email from "@/email";

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimiter = new RateLimiterMemory({
  points: 5,
  duration: 15 * 60,
});

// Mapping des artistes vers leurs adresses email
const artistEmails = {
  Erico: "ericotattoo@yahoo.com",
  UncleHo: "homer67@gmail.com",
  JBMaglia: "jxbxtattoo@gmail.com",
  JOC: "joc.tattooer@gmail.com",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const ip =
      req.headers["x-forwarded-for"] || req.headers["x-real-ip"] || req.headers["cf-connecting-ip"] || "unknown";

    // Rate limiting check
    try {
      await rateLimiter.consume(ip);
    } catch (error) {
      if (error instanceof RateLimiterRes) {
        return res.status(429).json({ message: "TOO_MANY_REQUESTS" });
      }
    }

    const { name, email, phone, select, contenu } = req.body;

    // Validation des champs requis
    if (!name || !email || !select || !contenu) {
      return res.status(400).json({ message: "INVALID_PARAMETERS" });
    }

    // Email syntax validation
    const pattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
      return res.status(400).json({ message: "EMAIL_SYNTAX_INCORRECT" });
    }

    // Récupération de l'adresse email de l'artiste
    const recipientEmail = artistEmails[select] || "neoncobratattoo@gmail.com";

    // Transform line returns for HTML
    const message = contenu
      .replace(/\n/g, "<br>")
      .replace(/\r/g, "<br>")
      .replace(/\t/g, "<br>")
      .replace(/<(?!br\s*\/?)[^>]+>/g, "");

    try {
      const data = await resend.emails.send({
        from: "heyd.stephane@gmail.com",
        to: recipientEmail,
        subject: `Nouvelle demande de contact pour ${select}`,
        react: Email({
          name,
          message,
          senderMail: email,
        }),
      });

      return res.status(200).json({ message: "EMAIL_SEND", data });
    } catch (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({ message: "ERROR_WITH_RESEND" });
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
  }
}
