module.exports = {
  title: 'virepress-template  ',
  description: 'Notes',
  base: '/',
  head: [],
  search: true,
  themeConfig: {
    nav: [
      { text: 'Guide1', link: '/guide1/' },
      { text: 'Guide2', link: '/guide2/' },
    ],
    sidebar: {
      '/guide1/': [
        { text: '大纲1', link: '/guide1/' },
        { text: '大纲2', link: '/guide1/start'},
        { text: '大纲3', link: '/guide1/end' },
      ],
      '/guide2/': [
        { text: '大纲1', link: '/guide2/', children: [
          { text: '大纲1-1', link: '/guide2/first' },
          { text: '大纲1-2', link: '/guide2/second' },
          { text: '大纲1-3', link: '/guide2/finally' },
      
        ]},
      ],
    }
  },
  markdown: {
    anchor: { // 没有生效
      permalink: false,
      permalinkBefore: false,
      permalinkSymbol: '###'
    }
  }
}