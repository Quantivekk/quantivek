import { NextResponse } from 'next/server'
import type {
  avatar,
  brand,
  innovation,
  onlinePresence,
  creativeMind,
  WebResultTag,
  startupPlan,
  faq,
  achievements,
} from '@/app/types/menu'

const avatarList: avatar[] = [
  {
    image: '/images/home/avatar_1.jpg',
    title: 'Sarah Johnson',
  },
  {
    image: '/images/home/avatar_2.jpg',
    title: 'Osaade Abraham',
  },
  {
    image: '/images/home/avatar_3.jpg',
    title: 'Sophia Roberts',
  },
  {
    image: '/images/home/avatar_4.jpg',
    title: 'Isabella Clark',
  },
]

const brandList: brand[] = [
  {
    image: '/images/home/brand/brand-icon-1.svg',
    darkImg: '/images/home/brand/brand-darkicon-1.svg',
    title: 'Adobe',
  },
  {
    image: '/images/home/brand/brand-icon-2.svg',
    darkImg: '/images/home/brand/brand-darkicon-2.svg',
    title: 'Figma',
  },
  {
    image: '/images/home/brand/brand-icon-3.svg',
    darkImg: '/images/home/brand/brand-darkicon-3.svg',
    title: 'Shopify',
  },
  {
    image: '/images/home/brand/brand-icon-4.svg',
    darkImg: '/images/home/brand/brand-darkicon-4.svg',
    title: 'Dribble',
  },
  {
    image: '/images/home/brand/brand-icon-5.svg',
    darkImg: '/images/home/brand/brand-darkicon-5.svg',
    title: 'Webflow',
  },
]

const innovationList: innovation[] = [
  {
    image: '/images/home/innovation/brand.svg',
    title: 'Brand\nStrategy',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/innovation/digitalmarketing.svg',
    title: 'Digital\nMarketing',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/innovation/uiux.svg',
    title: 'UI/UX\nDesign',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
  {
    image: '/images/home/innovation/analitics.svg',
    title: 'Analytics &\nReporting',
    bg_color: 'bg-green/20',
    txt_color: 'text-green',
  },
  {
    image: '/images/home/innovation/webdevp.svg',
    title: 'Web\nDevelopment',
    bg_color: 'bg-pink/20',
    txt_color: 'text-pink',
  },
]

const onlinePresenceList: onlinePresence[] = [
  {
    image: '/images/home/onlinePresence/online_img_1.jpg',
    title: 'FlowBank',
    tag: ['UX Research', 'Interface Design'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_2.jpg',
    title: 'Academy.co',
    tag: ['Product Design', 'Interaction Design'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_3.jpg',
    title: 'Genome',
    tag: ['Brand identity design', 'UX Research'],
    link: '',
  },
  {
    image: '/images/home/onlinePresence/online_img_4.jpg',
    title: 'Hotto',
    tag: ['Visual Storytelling', 'Web & Mobile Design'],
    link: '',
  },
]

const creativeMindList: creativeMind[] = [
  {
    image: '/images/home/creative/creative_img_1.png',
    name: 'Christopher Uchenna',
    position: 'CEO & Founder',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_2.png',
    name: 'Phrophecy Odetunde',
    position: 'Social Media Specialist',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_3.png',
    name: 'Osaade Abraham',
    position: 'Frontend Developer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
  {
    image: '/images/home/creative/creative_img_4.png',
    name: 'Darko Stanković',
    position: 'UI Designer',
    twitterLink: 'https://x.com/',
    linkedinLink: 'https://in.linkedin.com/',
  },
]

const WebResultTagList: WebResultTag[] = [
  {
    image: '/images/home/result/creativity.svg',
    name: 'Creativity',
    bg_color: 'bg-purple/20',
    txt_color: 'text-purple',
  },
  {
    image: '/images/home/result/innovation.svg',
    name: 'Innovation',
    bg_color: 'bg-blue/20',
    txt_color: 'text-blue',
  },
  {
    image: '/images/home/result/strategy.svg',
    name: 'Strategy',
    bg_color: 'bg-orange/20',
    txt_color: 'text-orange',
  },
]

const startupPlanList: startupPlan[] = [
  {
    plan_bg_color: 'bg-pale-yellow',
    text_color: 'text-dark_black',
    descp_color: 'dark_black/60',
    border_color: 'border-dark_black/10',
    plan_name: 'Starter Plan',
    plan_descp: 'Ideal for small projects and startups',
    plan_price: '150k - 250k NGN',
    icon_img: '/images/home/startupPlan/white_tick.svg',
    plan_feature: [
      '1-5 pages website or simple app',
      'Basic UI/UX Design',
      'Brand Consultation (1 session)',
      'Basic SEO Setup',
    ],
  },
  {
    plan_bg_color: 'bg-purple_blue',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Growth Plan',
    plan_descp: 'Best for growing businesses',
    plan_price: '350k - 600k NGN',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      '6-15 pages website or medium sized app',
      'Standard UI/UX Design',
      'Brand Strategy + Positioning (2-3 sessions)',
      'Digital Marketing Setup (Google & Social Media)',
      'Analytics & Reporting dashboard',
    ],
  },
  {
    plan_bg_color: 'bg-purple',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Premium Plan',
    plan_descp: 'Tailored for established companies',
    plan_price: '800k-1.2m NGN',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Advanced custom website/app development',
      'Complete UI/UX Design & testing',
      'In-depth brand strategy workshops',
      'Digital Marketing campaigns & SEO',
      'Full analytics + monthly reporting',
      '3 months post-launch support',
    ],
  },
  {
    plan_bg_color: 'bg-black',
    text_color: 'text-white',
    descp_color: 'white/60',
    border_color: 'border-white/10',
    plan_name: 'Enterprise Plan',
    plan_descp: 'Large scale solutions for enterprises',
    plan_price: '2m+ NGN',
    icon_img: '/images/home/startupPlan/black_tick.svg',
    plan_feature: [
      'Multi-platform systems (Web + Mobile)',
      'Dedicated consultation & project management',
      'Full-service digital marketing & analytics integration',
      'Long-term support & scaling strategy',
    ],
  },
]

const faqList: faq[] = [
  {
    faq_que: 'What services does Quantivek offer?',
    faq_ans:
      'Web & app development, SaaS solutions, hosting, and digital marketing services - all in one place.',
  },
  {
    faq_que: 'How long does a typical project take?',
    faq_ans:
      'Most projects wrap up within 2-6 weeks, depending on complexity and requirements.',
  },
  {
    faq_que: 'How is pricing structured at Quantivek?',
    faq_ans:
      'We offer flexible, project-based pricing tailored to your specific needs and budget.',
  },
  {
    faq_que: 'Do you offer ongoing support after project completion?',
    faq_ans:
      'Yes, we provide maintenance and support to keep your project running smoothly.',
  },
  {
    faq_que: 'How often will I receive updates on my project?',
    faq_ans:
      "We share regular progress updates - weekly or as agreed - so you're always in the loop.",
  },
]

const achievementsList: achievements[] = [
  {
    icon: '/images/home/achievement/framer_award.svg',
    dark_icon: '/images/home/achievement/dark_framer_award.svg',
    sub_title: 'Framer Awards',
    title:
      'Celebrated for cutting-edge interaction design and seamless user experiences.',
    year: '2024',
    url: '#!',
  },
  {
    icon: '/images/home/achievement/dribble_award.svg',
    dark_icon: '/images/home/achievement/dribble_award.svg',
    sub_title: 'Dribbble Awards',
    title: 'Recognized for creative excellence and innovative design solutions.',
    year: '2023',
    url: '#!',
  },
  {
    icon: '/images/home/achievement/awward_award.svg',
    dark_icon: '/images/home/achievement/dark_awward_award.svg',
    sub_title: 'awwwards Awards',
    title:
      'Honored with the Best Website Design for creativity, usability, and innovation.',
    year: '2022',
    url: '#!',
  },
]

export const GET = async () => {
  return NextResponse.json({
    avatarList,
    brandList,
    innovationList,
    onlinePresenceList,
    creativeMindList,
    WebResultTagList,
    startupPlanList,
    faqList,
    achievementsList,
  })
}
