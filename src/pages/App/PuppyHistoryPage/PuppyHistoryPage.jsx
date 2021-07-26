import * as userService from '../../../utilities/users-service'

export default function PuppyHistoryPage() {
    async function handleCheckToken() {
		const expDate = await userService.checkToken();
		console.log(expDate)
	}
    return (
        <>
    <h1>PuppyHistoryPage</h1>
    <button onClick={handleCheckToken}>Check Login</button>
    </>
    )
}
