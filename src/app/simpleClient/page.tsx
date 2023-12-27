'use client'
import { submitAction } from '@/actions/actions'

export default function Page() {
	return (
		<div className="h-screen">
			<div className="m-4 text-3xl">Pageがclient</div>
			<form action={submitAction} className="m-4">
				<input className="border border-gray-400 rounded px-4 py-2" name="name" placeholder="name" />
				<button className="bg-blue-700 px-4 py-2 rounded text-gray-100 hover:bg-blue-400" type="submit">
					Submit
				</button>
			</form>
		</div>
	)
}
