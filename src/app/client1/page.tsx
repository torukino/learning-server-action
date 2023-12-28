'use client'
import { useState } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import { submitAction } from '@/actions/actions'
export default function Page() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()

	const [name, setName] = useState('')

	const setNameFunc = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(searchParams)
		if (term) params.set('name', term)
		else params.delete('name')

		console.log(`${pathname}?${params.toString()}`)
		console.log(term)
		setName(term)

		replace(`${pathname}?${params.toString()}`)
	}, 300)

	return (
		<div className="h-screen">
			<div className="m-4 text-3xl">Pageがclient</div>
			<p>usePathname, useRouter, useSearchParams,</p>
			<p>useDebouncedCallback, useStateとかを使った</p>
			<form action={submitAction} className="m-4">
				<input
					onChange={e => {
						setNameFunc(e.target.value)
					}}
					className="border border-gray-400 rounded px-4 py-2"
					name="name"
					placeholder="name"
				/>
				<button className="bg-blue-700 px-4 py-2 rounded text-gray-100 hover:bg-blue-400" type="submit">
					Submit
				</button>
			</form>
			{name && <div className="bg-yellow-100 m-4 text-3xl">{name}</div>}
		</div>
	)
}
