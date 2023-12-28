'use server'

// Server Actionとは
// formのsubmit時にサーバ側で実行される関数のこと
// この関数はasync functionでなければならない
//  Server ActionはServer Component、もしくは個別のファイルで定義できる

export async function submitAction(formData: FormData) {
	'use server'
	console.log('submitAction', formData)
}
interface ServerResponse {
	message: string | null
}
export async function formDataAction(prevState: ServerResponse, formData: FormData): Promise<ServerResponse> {
	'use server'
	console.log('formData of formAction', formData)
	console.log('prevState of formAction', prevState)
	const name = formData.get('name')
	return { message: `formDataAction name:${name}` }
}
