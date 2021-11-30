export default {
  ArticleCard: {
    heading: 'Stories & Insights',
    items: Array.from(new Array(7), () => ({
      mediaProps: {
        component: 'img',
        src: '//source.unsplash.com/random',
      },
      subheading: 'Vivamus',
      heading: 'Lorem ipsum dolor',
      text: 'Read more',
      url: '/foo',
    })),
  },
  Content: {
    content: `
      <h1>HTML Ipsum Presents</h1>
      <p>
        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames
        ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,
        ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>
        Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi.
        Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
        lacus enim ac dui. <a href="#0">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
      </p>
      <h2>Header Level 2</h2>
      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>
      <p>
        Curabitur eu lobortis nisi. Sed condimentum diam et sollicitudin commodo. Vestibulum tempus
        ligula ac massa aliquet sodales. Suspendisse vitae quam lobortis, laoreet sem ut, venenatis
        dolor. Sed mattis rutrum eros ac lobortis. Aenean quis lectus dapibus, convallis mi sed,
        rutrum dolor.
      </p>
      <blockquote>
        <p>”Morbi felis dui, tincidunt suscipit consectetur”</p>
      </blockquote>
      <figure>
        <img src="//source.unsplash.com/weekly" alt="" />
        <figcaption>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</figcaption>
      </figure>
      <h3>Header Level 3</h3>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>
      <h4>Header Level 4</h4>
      <img src="//source.unsplash.com/daily" alt="" />
      <h5>Header Level 5</h5>
      <h6>Header Level 6</h6>
    `,
  },
  ProductSlideshow: {
    heading: 'Generic Heading',
    items: Array.from(new Array(6), () => ({
      mediaProps: {
        component: 'img',
        src: '//source.unsplash.com/m1m2EZOZVwA',
      },
      subheading: 'Vivamus',
      heading: 'Lorem ipsum dolor',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie varius viverra. Quisque urna tortor, bibendum ac quam a, bibendum fringilla nulla.', // prettier-ignore
      url: '/foo',
    })),
  },
  Marquee: {
    heading: ' EQUESTRIAN FASHION INNOVATION BRAND FROM SWEDEN • ',
  },
  Media: {
    mediaProps: {
      component: 'picture',
      breakpoints: {
        xs: '//source.unsplash.com/DmD8HVOjy4c/1280x720',
        sm: '//source.unsplash.com/DmD8HVOjy4c/1920x1080',
      },
      width: 1280,
      height: 720,
    },
  },
  PromoCardSlideshow: {
    items: Array.from(new Array(3), () => ({
      mediaProps: {
        component: 'img',
        src: '//source.unsplash.com/random',
      },
      subheading: 'Discover',
      heading: 'Bestsellers',
      url: '/foo',
    })),
  },
  Video: {
    backgroundMediaProps: {
      component: 'video',
      breakpoints: {
        xs: '//cms.mayadelorez.com/wp-content/uploads/2021/11/Header-mobile-2021-11-29.mp4',
        sm: '//cms.mayadelorez.com/wp-content/uploads/2021/11/Header-mobile-2021-11-29.mp4',
      },
    },
    heading: 'Innovative equestrian wear',
    primaryCtaLabel: "Shop woman's",
    primaryCtaUrl: '/foo1',
    secondaryCtaLabel: "Shop man's",
    secondaryCtaUrl: '/foo2',
  },
}
