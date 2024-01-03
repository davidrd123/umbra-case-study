import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";
import { astroImageTools } from "astro-imagetools";


// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Umbra',
		customCss: [
			// Path to your Tailwind base styles:
			'./src/styles/tailwind.css',
			'./src/styles/custom.css'
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
    },
		{
			label: 'Case Study',
			items: [
				{
					label: 'Introduction',
					link: '/case-study/1_introduction'
				},
				{
					label: 'Real-Time Collaboration',
					link: '/case-study/2_real-time-collaboration'
				},
				{
					label: 'Collaboration Implementation',
					link: '/case-study/3_collab-implementation'
				},
				{
					label: 'Executing User Code',
					link: '/case-study/4_executing-user-code'
				}
			]
		},
		{
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), 
	astroImageTools,
	tailwind({
		// Disable the default base styles:
		applyBaseStyles: false,
	}), 
	icon(), react()]
});