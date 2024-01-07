import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  redirects: {
    '/slides': 'https://drive.google.com/drive/folders/1Qt2_OE9aRGxcmlrHw7pti_prOOVVqyoG?usp=drive_link',
    '/zoom': 'https://fullerton.zoom.us/j/8821208101',
    '/discord': 'https://discord.com/invite/uNngpdRSJE',
    '/map': 'https://www.fullerton.edu/campusmap/_resources/pdf/CSUF-CAMPUS-MAP.pdf',
    '/midterm': '/midterm.pdf',
    '/midterm_answers': 'https://docs.google.com/document/d/1UPNAQHrw65KDQRIVtSrYFwQLKdKfjgxfUqW2COGNDjY/edit?usp=sharing'
  }
});
