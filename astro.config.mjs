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
		favicon: './favicon.ico',
		components: {
			SocialIcons: './src/components/CustomSocialIcons.astro',
		},
		customCss: [
			// Path to your Tailwind base styles:
			'./src/styles/tailwind.css',
			'./src/styles/custom.css'
		],
    social: {
      github: 'https://github.com/Umbra-Team/umbra',
    },
    logo: {
      src: './src/assets/umbra-logo-transparent.png',
      alt: 'Umbra Logo'
    },
    sidebar: [
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
				},
				{
					label: "Decisions for Code Execution",
					link: '/case-study/5_decisions-for-code-execution'
				},
				{
					label: 'System Design',
					link: '/case-study/6_system-design'
				},
				{
					label: 'Future Work',
					link: '/case-study/7_future-directions'
				},
				{
					label: 'References',
					link: '/case-study/8_references'
				}
			]
		},
		{
      label: 'References',
      autogenerate: {
        directory: 'references'
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