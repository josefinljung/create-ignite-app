import dynamic from 'next/dynamic'

export const ArticleSlideshow = dynamic(() => import(/* webpackChunkName: "blocks/ArticleSlideshow" */ './ArticleSlideshow')) // prettier-ignore
export const Content = dynamic(() => import(/* webpackChunkName: "blocks/Content" */ './Content')) // prettier-ignore
export const Hero = dynamic(() => import(/* webpackChunkName: "blocks/Hero" */ './Hero')) // prettier-ignore
export const Media = dynamic(() => import(/* webpackChunkName: "blocks/Media" */ './Media')) // prettier-ignore
export const NewBlock = dynamic(() => import(/* webpackChunkName: "blocks/NewBlock" */ './NewBlock')) // prettier-ignore
export const ScrollingBanner = dynamic(() => import(/* webpackChunkName: "blocks/ScrollingBanner" */ './ScrollingBanner')) // prettier-ignore
