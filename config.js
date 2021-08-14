module.exports = {
  url: 'https://gatsby-starter-blog-and-cv.netlify.app',
  pathPrefix: '/',
  title: 'Kevin McDonald CV',
  keywords:
    'content authenticity initiative, ethereum, gundb, bitcoin, bees',
  subtitle: 'Developer. Optimizer. Learner.',
  copyright: '© 2021 | All rights reserved',
  disqusShortname: 'i001962',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-xxxxxxx-7',
  menu: [
    {
      label: 'CV',
      path: '/cv'
    },
    {
      label: 'BLOG',
      path: '/'
    }
  ],
  author: {
    name: 'Kevin McDonald',
    photo: '/photo.jpg',
    bio: 'Entrepreneuer. Hacker. Mentor.',
    contacts: {
      // don't remove fields, just make them empty string ''
      // https://github.com/gatsbyjs/gatsby/issues/2392
      github: 'i001962',
      twitter: 'i001962',
      linkedin: 'kmcdonald',
      telegram: 'i001962',
      instagram: 'i001962',
      facebook: 'i001962',
      email: 'i001962@gmail.com',
      rss: '/rss.xml'
    }
  }
}
