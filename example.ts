import { FlinkClient } from "./src/FlinkClient"

(async () => {
    try {
        const flinkClient = new FlinkClient()
        const token = await flinkClient.getMeService().createAccount(
            { email: 'emailAddress', first_name: 'noway', last_name: 'thatworked', password: 'securePassword' }
        )
        if(token) {
            const status = await flinkClient.getMeService().getStatus()
            console.log('status', status)
        }
    } catch (e) {
        console.log('e', e)
    }
    
})()