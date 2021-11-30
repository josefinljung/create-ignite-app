import dynamic from 'next/dynamic'

export const ArticleSlideshow = dynamic(() => import(/* webpackChunkName: "blocks/ArticleSlideshow" */ './ArticleSlideshow')) // prettier-ignore
export const Content = dynamic(() => import(/* webpackChunkName: "blocks/Content" */ './Content')) // prettier-ignore
// export const Hero = dynamic(() => import(/* webpackChunkName: "blocks/Hero" */ './Hero')) // prettier-ignore
export const Media = dynamic(() => import(/* webpackChunkName: "blocks/Media" */ './Media')) // prettier-ignore
export const PromoCard = dynamic(() => import(/* webpackChunkName: "blocks/PromoCard" */ './PromoCard')) // prettier-ignore
export const Marquee = dynamic(() => import(/* webpackChunkName: "blocks/Marquee" */ './Marquee')) // prettier-ignore
export const Video = dynamic(() => import(/* webpackChunkName: "blocks/Video" */ './Video')) // prettier-ignore
