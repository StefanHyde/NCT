import sgMail from "@sendgrid/mail";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export default function handler(req, res) {
    // Verify if post method is used
    if(req.method !== 'POST') {
        res.status(405).json({message: 'INVALID_METHOD'});
        return;
    }

    const { name, email, phone, select, contenu } = req.body;

    if(!name || !email || !select || !contenu ) {
        res.status(400).json({message: 'INVALID_PARAMETERS'});
        return;
    }

    // Email syntax
    const pattern =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!pattern.test(email)) {
        res.status(400).send({
            message: "EMAIL_SYNTAX_INCORRECT",
        });
        return;
    }

    // Transform lines returns
    const message = contenu
        .replace(/\n/g, "<br>")
        .replace(/\r/g, "<br>")
        .replace(/\t/g, "<br>")
        .replace(/<(?!br\s*\/?)[^>]+>/g, "");

    // API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    //Create message
    const senderGridMail = {
        to: "contact@stefanheyd.com",
        from: "contact@stefanheyd.com",
        templateId: "d-2b19a7a80ac14d58b8a85dbea0764e83",
        dynamic_template_data: {
            contenu: message,
            nom: name,
            email: email,
            phone: phone,
            artist: select,
        },
    };

    //Sendgrid
        (async () => {
            try {
                await sgMail.send(senderGridMail);
                res.status(200).json({message: 'EMAIL_SEND',});
            }
            catch {
                res.status(500).json({message: 'ERROR_WITH_SENDGRID',});
                return;
            }
        })();


}