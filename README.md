<p align="center">
 <img width="90px" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/ykugeyc0vd81hn3qivrr" align="center" alt=":package: ts-npm-package-boilerplate" />
 <h2 align="center">Flink Client</h2>
 <p align="center">Inoffical Typescript SDK for interacting with Flink API</p>
  
# Getting started

This is a TypeScript SDK for communicating with Flink API. The API is not offical and was reverse engineered. Currently only the endpoints for creating new users are implemented, as these are the most critical ones.

## Heads up

You need a unique phone number for each account you want to create. For automation you can take a look at https://sms-activate.org/

## Installation

````
yarn add goflink-client
````

## Example

```ts
import { FlinkClient } from "./FlinkClient"

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
```

## Documentation
For Documentation I can only provide an OpenAPI schema. You can check it out [here](todo)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## 📝 License

This project is [MIT](LICENSE) licensed.
