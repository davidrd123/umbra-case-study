import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Umbra',
		customCss: [
			// Path to your Tailwind base styles:
			'./src/tailwind.css',
		],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    logo: {
      src: './src/assets/umbra-logo-transparent.png',
      alt: 'Umbra Logo'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), 
	tailwind({
		// Disable the default base styles:
		applyBaseStyles: false,
	}), 
	icon(), react()]
});