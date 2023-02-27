// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Power\'s Wiki',
  tagline: '^_^',
  url: 'https://wiki-power.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',
  organizationName: 'linyuxuanlin', // Usually your GitHub org/user name.
  projectName: 'Wiki_Docusaurus', // Usually your repo name.

  //scripts: [
  //  'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/embed.js',
  //  'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/autoFitIframe.js'
  //],
  // plugins: [
  //   [
  //     require.resolve("@cmfcmf/docusaurus-search-local"),
  //     {
  //         // whether to index docs pages
  //         indexDocs: true,

  //         // Whether to also index the titles of the parent categories in the sidebar of a doc page.
  //         // 0 disables this feature.
  //         // 1 indexes the direct parent category in the sidebar of a doc page
  //         // 2 indexes up to two nested parent categories of a doc page
  //         // 3...
  //         //
  //         // Do _not_ use Infinity, the value must be a JSON-serializable integer.
  //         indexDocSidebarParentCategories: 0,

  //         // whether to index blog pages
  //         indexBlog: true,

  //         // whether to index static pages
  //         // /404.html is never indexed
  //         indexPages: false,

  //         // language of your documentation, see next section
  //         language: "zh",

  //         // setting this to "none" will prevent the default CSS to be included. The default CSS
  //         // comes from autocomplete-theme-classic, which you can read more about here:
  //         // https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
  //         // When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
  //         // overwrites with `!important`, because they might otherwise not be applied as expected. See the
  //         // following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
  //         style: undefined,

  //         // The maximum number of search results shown to the user. This does _not_ affect performance of
  //         // searches, but simply does not display additional search results that have been found.
  //         maxSearchResults: 8,

  //         // lunr.js-specific settings
  //         lunr: {
  //           // When indexing your documents, their content is split into "tokens".
  //           // Text entered into the search box is also tokenized.
  //           // This setting configures the separator used to determine where to split the text into tokens.
  //           // By default, it splits the text at whitespace and dashes.
  //           //
  //           // Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
  //           tokenizerSeparator: /[\s\-]+/,
  //           // https://lunrjs.com/guides/customising.html#similarity-tuning
  //           //
  //           // This parameter controls the importance given to the length of a document and its fields. This
  //           // value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
  //           // reduces the effect of different length documents on a term’s importance to that document.
  //           b: 0.75,
  //           // This controls how quickly the boost given by a common word reaches saturation. Increasing it
  //           // will slow down the rate of saturation and lower values result in quicker saturation. The
  //           // default value is 1.2. If the collection of documents being indexed have high occurrences
  //           // of words that are not covered by a stop word filter, these words can quickly dominate any
  //           // similarity calculation. In these cases, this value can be reduced to get more balanced results.
  //           k1: 1.2,
  //           // By default, we rank pages where the search term appears in the title higher than pages where
  //           // the search term appears in just the text. This is done by "boosting" title matches with a
  //           // higher value than content matches. The concrete boosting behavior can be controlled by changing
  //           // the following settings.
  //           titleBoost: 5,
  //           contentBoost: 1,
  //           tagsBoost: 3,
  //           parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
  //         }     
  //    },
  //   ],
  // ],
  themes: [
    // ... Your other themes.
    /*
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],*/
  ],


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleAnalytics: {
          trackingID: 'UA-152900803-1',
          anonymizeIP: false,
        },
        gtag: {
          trackingID: 'G-N2MCBBXJ0F', //Fork 我的仓库，请把这个改成你自己的
          anonymizeIP: false,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/',
          sidebarCollapsible: true, //默认折叠
          routeBasePath: "/",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

        blog: {
          showReadingTime: false,
          editUrl: 'https://github.com/linyuxuanlin/Wiki_Docusaurus/edit/main/',
          //blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          postsPerPage: 8,
          path: 'blog',
          blogSidebarTitle: 'Recent',
          feedOptions: {
            type: 'all',
            title: 'Power\'s Blog',
            description: 'Power\'s Wiki 的博客 RSS',
            copyright: `Copyright © ${new Date().getFullYear()} Power Lin.`,
          },
        },

        sitemap: {
          changefreq: 'always',
          priority: 1.0,
          //ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [{
    href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  }, ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {

        apiKey: '5c07d8bf9c9928c4453857f6cad0420e',//?02bd2340879bdb682f2a9fe509fec240
        indexName: 'wiki-power', //

        // The application ID provided by Algolia
        appId: 'BH4D9OD16A', //BH4D9OD16A 是默认的，文档见 https://autocomplete-experimental.netlify.app/docs/docsearchmodal/#appid，用自己的 ID IRO903CONI 反而搜不出内容 

        // Public API key: it is safe to commit it
        // apiKey: 'defe7fd8690822eed8e3c94801bab286',

        // indexName: 'wiki-power',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },

      //sidebarCollapsible: true, //默认折叠

      metadata: [{
        name: 'keywords',
        content: 'ATE, hardware, STM32, Arduino, NAS, software, blog'
      }],

      image: 'https://cos.ap-guangzhou.myqcloud.com/wiki-media-1253965369/doc/logo-zip.png',

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Power\'s Wiki',
        hideOnScroll: true,
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/



        items: [{
            to: "硬件与半导体",
            label: "硬件与半导体",
            position: "right",
          },
          {
            to: "嵌入式与软件",
            label: "嵌入式与软件",
            position: "right",
          },
          {
            to: "效率指南",
            label: "效率指南",
            position: "right",
          },

          {
            to: "blog",
            label: "博客",
            position: "right",
          },

          {
            href: "https://github.com/linyuxuanlin/Wiki_Docusaurus",
            position: "right",
            className: "header-github-link",
            'aria-label': "GitHub repository",
          },


        ],
      },


      footer: {
        style: 'light',


        links: [

          {
            href: "https://nav.wiki-power.com/",
            label: "友链 & 导航站",
          },
          {
            href: "http://digest.wiki-power.com/",
            label: "书摘",
          },
          {
            label: '资源仓库',
            href: 'https://github.com/linyuxuanlin/File-host',
          },

          /*
          {
            label: '电源设计方案收集',
            href: 'https://github.com/linyuxuanlin/Collection_of_Power_Module_Design',
          },
          {
            href: "https://wiki.wildwolf.pw/",
            label: "机器人队知识库",
          },
          {
            label: '功能电路模块化',
            href: 'https://github.com/linyuxuanlin/Modularity_of_Functional_Circuit',
          },
          
          {
            label: '网页版串口助手',
            href: 'https://serial.wiki-power.com/',
          },
          {
            label: 'Markdown 转公众号编辑器',
            href: 'https://md2wechat.wiki-power.com/',
          },
          */
        ],


        //copyright: `by Power Lin | 粤 ICP 备 20014898 号 | Built with Docusaurus.`,
      },


      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;