module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    // Your Name
    name: '김경민',
    // Main Site Title
    title: `Gyeongmin Kim | Android Developer`,
    // Description that goes under your name in main bio
    description: `안녕하세요. 거북이 개발자 김경민입니다. 🐢`,
    // Optional: Twitter account handle
    author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/GyeongminKimGyeongminKim`,
    // Optional: LinkedIn account URL
    linkedin: `https://github.com/GyeongminKimGyeongminKim/GyeongminKimGyeongminKim.github.io`,
    // Content of the About Me section
    about: [
      "빠르지 않더라도 성실, 꾸준을 지향하는 개발자입니다.",
      "Kotlin으로 앱 개발을 공부하고 있는 주니어 개발자입니다.",
      "시각적으로 예쁜 디자인을 좋아하고, 만들고자 합니다.",
      "타인을 공감하는 자세가 준비되어 있습니다."
    ].join("\n"),
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: '페이키즈 (2024. 08 ~ 2025. 02)',
        description: [
          "어린이들을 위한 금융 지식 학습 어플리케이션",
          "- 프로젝트 참여 인원: 7명",
          "- My Part: Android",
          "- Language: Kotlin",
          "- Architecture: MVVM, Clean Architecture",
          "- State Management: ViewModel, LiveData",
          "- Network: Retrofit2 + OkHttp3",
          "- Local Storage: DataStore",
          "- Concurrency: Coroutines",
          "- Dependency Injection: Hilt",
          "- UI: XML",
          "- Image Load: Glide",
          "- Tooltip: Balloon",
          "- Navigation: Jetpack Navigation Component",
          "- Sound: Media Player"
        ].join("\n"),
        link: 'https://github.com/PayKids/paykids-android',
      },
      {
        name: '띵커벨 (2024. 06 ~ 현재)',
        description: [
          "명지대학교 공지사항을 한 번에 모아 볼 수 있고, 키워드 알림을 제공하는 어플리케이션",
          "Google Play Store 출시",
          "- 프로젝트 참여 인원: 7명",
          "- My Part: Android",
          "- Language: Kotlin",
          "- Architecture: MVVM, Clean Architecture",
          "- State Management: ViewModel, LiveData",
          "- Network: Retrofit2 + OkHttp3",
          "- Local Storage: DataStore",
          "- Concurrency: Coroutines",
          "- Dependency Injection: Hilt",
          "- UI: XML",
          "- Image Load: Glide"
        ].join("\n"),
        link: 'https://play.google.com/store/apps/details?id=com.neverland.thinkerbell&hl=ko',
      },
      {
        name: '나이테 (2024. 03 ~ 2024. 06)',
        description: [
          "농산물 품질 확인 어플리케이션",
          "- 프로젝트 참여 인원: 4명",
          "- Language: TypeScript, Python",
          "- Framework: React Native, Express, Flask",
          "- Runtime Environment: Node.js",
          "- Database: MySQL"
        ].join("\n"),
        link: 'https://github.com/GyeongminKimGyeongminKim/Agricultural-product-classification',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: '교내 IT 연합 프로젝트 동아리 DEPth (2024.03 ~ 2025.02)',
        description: [
          "- 안드로이드 파트로 1년간 활동하며 팀원들과 Layout, Activity, Fragment, ViewModel, OkHttp 등 기초적인 공부를 진행했습니다.",
          "- 여름 방학 해커톤에서 기획한 앱을 미처 완성시키지 못했지만 하루 동안 집중해서 코딩을 한 것에 의의를 두었고, 이를 발판 삼아 의지를 다시 한 번 다졌습니다.",
          "- MVP 프로젝트에서 교내 공지사항을 손쉽게 확인할 수 있는 '띵커벨'을 개발해 구글 플레이스토어에 출시했으며, 에브리타임 플랫폼을 통해 교내 홍보를 진행했습니다.",
          "- 메인 프로젝트에서 어린이를 대상으로 한 금융 퀴즈 어플 '페이키즈'를 개발했습니다.(구글 플레이스토어 출시 예정입니다.)",
          "- 기초 스터디와 2번의 프로젝트를 통해 앱을 개발하는 진귀한 경험을 하였고, 그 과정 속에서 다양한 사람들과 소통하며 대화하는 법을 익혔습니다.",
          "- Git, Figma, Notion, Discord 등을 통해 협업하는 기술을 배웠습니다."
        ].join("\n"),
        link: 'https://github.com/DEPthes',
      },
      {
        name: 'CU 독산센터점/독산남문점 (2024.01 ~ 현재)',
        description: [
          "편의점에서 1년이 넘는 시간 동안 근무하며 어린 아이부터 어르신까지 다양한 연령층의 손님들을 응대하였습니다. 항상 밝은 태도로 손님들을 맞이하였으며, 그들의 눈높이에 맞는 대화 방식으로 커뮤니케이션 능력을 향상시켰습니다. 또한 혼자 근무하면서 여러 상황에서의 위기 대처 능력을 키웠습니다.",
        ].join("\n"),
        link: "#",
      },
    ],
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: '명지대학교 (2019. 03 ~ 2025. 02)',
        description: [
          "융합소프트웨어학부 데이터테크놀로지전공 졸업",
          "학점 4.15 / 4.5",
          "성적 장학금 3회 수상"
        ].join("\n"),
        link: 'https://www.mju.ac.kr',
      }
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Kotilin, Pytnon',
      },
      {
        name: 'Tools',
        description:
          'Android Studio, Visual Studio Code, Git, Figma',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'MVVM, Clean Architecture, Unity',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/android_icon.png`,
      },
    },
  ],
};
