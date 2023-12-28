import { Hachi_Maru_Pop } from 'next/font/google'

import type { Metadata } from 'next'

import { siteConfig } from '@/config/site'

const hachi_maru_pop = Hachi_Maru_Pop({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: [
		{
			url: '/logo.svg',
			href: '/logo.svg',
		},
	],
}

function PlaygroundLayout({ children }: { children: React.ReactNode }) {
	return <div className={`${hachi_maru_pop.className} bg-white dark:bg-dark h-full`}> {children}</div>
}

export default PlaygroundLayout
