import { config, fields, collection, singleton } from '@keystatic/core';

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
        image: fields.url({ label: 'Afbeelding URL', validation: { isRequired: false } }),
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
  singletons: {
    homepagina: singleton({
      label: 'Homepagina',
      path: 'content/homepagina',
      schema: {
        heroBadge: fields.text({ label: 'Hero badge' }),
        heroHeadlinePre: fields.text({ label: 'Hero koptekst: begin' }),
        heroHeadlineEmphasis: fields.text({ label: 'Hero koptekst: nadruk' }),
        heroHeadlinePost: fields.text({ label: 'Hero koptekst: einde' }),
        heroBody: fields.text({ label: 'Hero introductie', multiline: true }),
        heroStats: fields.array(
          fields.object({
            number: fields.text({ label: 'Getal' }),
            label: fields.text({ label: 'Omschrijving' }),
          }),
          { label: 'Hero statistieken', itemLabel: (props) => props.fields.number.value || 'Statistiek' }
        ),
        heroFloatingStatNumber: fields.text({ label: 'Zwevende kaart: getal' }),
        heroFloatingStatLabel: fields.text({ label: 'Zwevende kaart: omschrijving' }),
        heroImage: fields.url({ label: 'Hero afbeelding URL', validation: { isRequired: false } }),
        aboutLabel: fields.text({ label: 'Over ons: label' }),
        aboutHeadline: fields.text({ label: 'Over ons: koptekst', multiline: true }),
        aboutBody: fields.array(
          fields.text({ label: 'Alinea', multiline: true }),
          { label: 'Over ons: tekst', itemLabel: (props) => props.value?.slice(0, 40) || 'Alinea' }
        ),
        aboutValues: fields.array(
          fields.object({
            title: fields.text({ label: 'Titel' }),
            description: fields.text({ label: 'Omschrijving' }),
          }),
          { label: 'Waarden', itemLabel: (props) => props.fields.title.value || 'Waarde' }
        ),
        quoteText: fields.text({ label: 'Citaat', multiline: true }),
        quoteAttribution: fields.text({ label: 'Citaat: toeschrijving' }),
        newsletterLabel: fields.text({ label: 'Nieuwsbrief: label' }),
        newsletterHeadline: fields.text({ label: 'Nieuwsbrief: koptekst', multiline: true }),
        newsletterBody: fields.text({ label: 'Nieuwsbrief: tekst', multiline: true }),
      },
    }),
  },
});
