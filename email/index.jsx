import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import React from 'react';



export default function Email({ name, senderMail, message }) {
  return (
    <Html>
      <Head />
      <Font
        fontFamily="Nunito"
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap',
          format: 'woff2',
        }}
        fontWeight={500}
        fontStyle="normal"
      />
      <Preview>Nouveau message de {name}</Preview>

      <Body>
        <Container>
          <Section>
            <Text>
              <h1>Vous avez un nouveau message de {name}</h1>
              <p>{message}</p>
            </Text>
            <Button href={`mailto:${senderMail}`}>Répondre</Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}