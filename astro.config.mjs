import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://rmarji.github.io',
  base: '/rayo-os',
  integrations: [
    starlight({
      title: 'Rayo OS',
      description: 'Decision skills for Claude Code. A loop, not a list.',
      sidebar: [
        { label: 'Start', items: [{ label: 'Overview', slug: 'index' }] },
        {
          label: 'Productivity',
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
        { label: 'Patterns', items: [{ label: 'A loop, not a list', slug: 'patterns/the-loop' }] },
      ],
    }),
  ],
});
