import Head from 'next/head';

export default function RGPDPage() {
    return (
        <>
            <Head>
                <title>RGPD - Politique de confidentialité</title>
            </Head>

            <div>
                <h1>RGPD - Politique de confidentialité</h1>
                <p>Ceci est notre politique de confidentialité conformément au RGPD.</p>

                <h2>Collecte des données personnelles</h2>
                <p>Nous collectons les données personnelles suivantes :</p>
                <ul>
                    <li>Nom</li>
                    <li>Adresse e-mail</li>
                    <li>Adresse IP</li>
                </ul>

                <h2>Utilisation des données personnelles</h2>
                <p>Les données personnelles collectées sont utilisées pour :</p>
                <ul>
                    <li>Répondre aux demandes des utilisateurs</li>
                    <li>Améliorer notre site web</li>
                    <li>Envoyer des newsletters et des communications marketing</li>
                </ul>

                <h2>Protection des données</h2>
                <p>Nous prenons la sécurité des données personnelles au sérieux et mettons en place des mesures de sécurité pour protéger ces données contre tout accès non autorisé ou toute divulgation.</p>

                <h2>Conservation des données</h2>
                <p>Nous conservons les données personnelles collectées aussi longtemps que nécessaire pour atteindre les objectifs mentionnés ci-dessus ou aussi longtemps que requis par la loi.</p>

                <h2>Droits des utilisateurs</h2>
                <p>Les utilisateurs ont les droits suivants concernant leurs données personnelles :</p>
                <ul>
                    <li>Droit d'accès</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement</li>
                    <li>Droit de limitation du traitement</li>
                    <li>Droit à la portabilité des données</li>
                </ul>

                <h2>Politique en matière de cookies</h2>
                <p>Nous utilisons des cookies sur notre site web. Les cookies sont de petits fichiers texte qui sont stockés sur l'appareil de l'utilisateur par le navigateur web et qui permettent de reconnaître l'utilisateur lorsqu'il revient sur le site web.</p>

                <h2>Contact</h2>
                <p>Pour toute question ou demande concernant notre politique de confidentialité, veuillez nous contacter à l'adresse suivante : [adresse e-mail de contact].</p>
            </div>
        </>
    );
};

