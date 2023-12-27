'use server'

import { submitAction } from '@/actions/actions'

export default async function Page() {
	return (
		<div className="h-screen flex flex-col">
			<div className="m-4 text-3xl">Page functionは server</div>
			<div className="m-4 text-xl">注意:Page functionは非同期関数</div>

			<form action={submitAction} className="m-4">
				<input className="border border-gray-400 rounded px-4 py-2" name="name" placeholder="name" />
				<button className="primaryButton bg-blue-700 px-4 py-2 rounded text-gray-100 hover:bg-blue-400" type="submit">
					Submit
				</button>
			</form>
		</div>
	)
}
