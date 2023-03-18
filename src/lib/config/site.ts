import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'heroic-cajeta-4257c4.netlify.app', // netlify subdomain for now
  title: 'Shaum',
  subtitle: 'Personal Site',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: 'https://yt3.ggpht.com/EY3SldVTJk1M2MO8DYfjRD63gex94lFaUHzvQrfc4N6fHJpfbVQwCJ4seWZ7ZKO0LWVvznI0=s600-c-k-c0x00ffffff-no-rj-rp-mo',
    name: 'Shaum Debnath',
    status: '',
    bio: 'hi.'
  },
  themeColor: '#3D4451'
}
