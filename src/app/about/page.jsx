import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  BehanceInIcon,
  MediumInIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Soumi De. I live in the city of joy, where I dream, believe and engineer.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I’m Soumi. I live in the city of joy, where I dream, believe and engineer.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
            I'm currently a junior Information Technology undergrad, fueling my passion for design and development. As a UI/UX Designer on the run to become a Developer, I bring a blend of creativity and problem-solving skills to the table. I navigate through challenges, defining problems and ideating solutions by keeping my empathy center and forward. The work I do is not just a task - it's a relentless pursuit to make things work seamlessly.
            </p>
            <p>
            My strength lies in problem-solving and analytics, and I find immense pleasure in applying these skills to diverse situations. I'm a quick learner and an attentive listener, forming natural connections with others and effectively collaborating with cross-functional teams. I thrive on the thrill of the next big challenge, always seeking opportunities for growth.
            </p>
            <p>
            Beyond the tech world, I love embarking on culinary adventures and exploring new cultural tastes. Cooking has been my passion since forever, allowing me to express creativity. I embrace the unconventional in everything I do. Whether it's powerlifting, rowing, or delving into the world of slam poetry, my diverse interests set me apart, shaping a unique and multifaceted identity.
            </p>
            
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
           
            <SocialLink href="https://github.com/soumizde" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/soumizde" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://www.behance.net/soumide1" icon={BehanceInIcon} className="mt-4">
              Follow on Behance
            </SocialLink>
            <SocialLink href="https://soumizde.medium.com/" icon={MediumInIcon} className="mt-4">
              Follow on Medium
            </SocialLink>
            <SocialLink
              href="mailto:soumizde@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              soumizde@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
