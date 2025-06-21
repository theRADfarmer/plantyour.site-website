import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Plant Your Site Blog',
    description: 'The official blog of plantyour.site, where we provide beautiful, responsive, inexpensive, and personalized websites for local businesses.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}