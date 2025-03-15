// sidebars.js
module.exports = {
  birdwatchSidebar: [
    {
      type: 'category',
      label: 'Introduzione',
      items: ['intro/getting-started'],
    },
    {
      type: 'category',
      label: 'Famiglie di Uccelli',
      items: [
        {
          type: 'category',
          label: 'Passeriformi',
          items: ['bird-families/passerines/overview'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Birdwatching',
      items: [
        'bird-watching/math-test',
        'bird-watching/migration-math',
      ],
    },
  ],
};