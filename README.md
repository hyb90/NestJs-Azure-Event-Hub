
## Description

Nest js with Azure Event Hub, Service Bus and Claud Atlas MongoDB Example

## Content

### This Example Contains 3 main Modules 
#### Event Hub Sender Module
Used to demonstrate how to produce Event Hub using Nest Js api (http://server/event-hub-sender/test)
#### Event Hub Receiver Module
Used to demonstrate how to receive an event and process its data and send it to service bus queue
#### Service Bus Receiver Module
Used to demonstrate how to listen to queue and process its data / store it to MongoDB 

## Installation

```bash
$ git clone
$ npm install
```
You Need also to create account on Azure Portal and create an Event Hub, and Service Bus with multiple queues and add needed access policies to fill .env file as example
## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - Humam Albitar

## License

Nest is [MIT licensed](LICENSE).
