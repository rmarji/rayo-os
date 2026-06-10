import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://rmarji.github.io',
  base: '/rayo-os',
  integrations: [
    starlight({
      title: 'Rayo OS',
      description: 'Decision skills for Claude Code. A loop, not a list.',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Start', items: [{ label: 'Overview', slug: 'index' }, { label: 'Architecture', slug: 'architecture' }] },
        {
          label: 'Productivity',
          badge: { text: 'built', variant: 'success' },
          items: [
            { label: 'Overview', slug: 'productivity/overview' },
            { label: 'route', slug: 'productivity/route' },
            { label: 'fate', slug: 'productivity/fate' },
            { label: 'mcdm', slug: 'productivity/mcdm' },
            { label: 'ooc-emr', slug: 'productivity/ooc-emr' },
            { label: 'ctfar', slug: 'productivity/ctfar' },
            { label: 'ship-gate', slug: 'productivity/ship-gate' },
          ],
        },
        {
          label: 'Domains',
          badge: { text: 'planned', variant: 'caution' },
          items: [
            { label: 'Content', slug: 'domains/content' },
            { label: 'Comms', slug: 'domains/comms' },
            { label: 'Money', slug: 'domains/money' },
            { label: 'Health', slug: 'domains/health' },
            { label: 'Ops', slug: 'domains/ops' },
            { label: 'Coach', slug: 'domains/coach' },
          ],
        },
        { label: 'Patterns', items: [{ label: 'A loop, not a list', slug: 'patterns/the-loop' }] },
      ],
    }),
  ],
});
