import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'heroic-cajeta-4257c4.netlify.app', // netlify subdomain for now
  title: 'Shaum',
  subtitle: 'Personal Site',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/astro_500.png',
    name: '[Shaumpro]vo Debnath',
    status: '',
    bio: 'Current sophomore in high school'
  },
  themeColor: '#3D4451'
}
