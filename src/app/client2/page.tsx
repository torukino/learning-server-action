'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useFormState } from 'react-dom'
import { useDebouncedCallback } from 'use-debounce'
import { formDataAction } from '@/actions/actions'
import { Button } from '@/catalyst/button'
import { Field, Label } from '@/catalyst/fieldset'
import { Input } from '@/catalyst/input'

export default function Page() {
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { replace } = useRouter()
	const [name, setName] = useState('')

	const [formState, formAction] = useFormState(formDataAction, { message: null })

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
			<form action={formAction} className="m-4">
				<Field>
					<Label>名前：</Label>
					<Input name="name" onChange={e => setNameFunc(e.target.value)} placeholder="名前を入力" />
				</Field>
				<Button color="cyan" type="submit">
					Save changes
				</Button>
			</form>
			{name && <div className="bg-yellow-100 m-4 text-3xl">{name}</div>}
			<div>{formState.message}</div>
		</div>
	)
}
