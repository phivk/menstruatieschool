import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'phivk/menstruatieschool',
  },
  collections: {
    workshops: collection({
      label: 'Workshops',
      slugField: 'title',
      path: 'content/workshops/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titel' } }),
        badge: fields.text({ label: 'Badge' }),
        date: fields.date({ label: 'Datum' }),
        displayDate: fields.text({ label: 'Weergavedatum' }),
        location: fields.text({ label: 'Locatie' }),
        duration: fields.text({ label: 'Duur' }),
        price: fields.text({ label: 'Prijs' }),
        status: fields.text({ label: 'Status tekst' }),
        statusType: fields.select({
          label: 'Status type',
          options: [
            { label: 'Beschikbaar', value: 'available' },
            { label: 'Nieuw', value: 'new' },
            { label: 'Laatste plekken', value: 'last-spots' },
            { label: 'Vol', value: 'full' },
          ],
          defaultValue: 'available',
        }),
        statusLabel: fields.text({ label: 'Status label', defaultValue: 'Beschikbaarheid' }),
        accentColor: fields.select({
          label: 'Accentkleur',
          options: [
            { label: 'Vermiljoen', value: 'vermilion' },
            { label: 'Amber', value: 'amber' },
            { label: 'Blush', value: 'blush' },
          ],
          defaultValue: 'vermilion',
        }),
        ticketUrl: fields.text({ label: 'Ticket URL' }),
        cardDescription: fields.text({ label: 'Kaartbeschrijving', multiline: true }),
        intro: fields.text({ label: 'Intro', multiline: true }),
        aboutParagraphs: fields.array(
          fields.text({ label: 'Alinea', multiline: true }),
          { label: 'Over de workshop', itemLabel: (props) => props.value || 'Alinea' },
        ),
        learnings: fields.array(
          fields.text({ label: 'Leermoment' }),
          { label: 'Leermomenten', itemLabel: (props) => props.value || 'Leermoment' },
        ),
        content: fields.markdoc({ label: 'Inhoud' }),
      },
    }),
  },
});
