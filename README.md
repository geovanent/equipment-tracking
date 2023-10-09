<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">NestJs is a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript.

```
Project Structure

src/
|-- equipment/
|   |-- dto/
|       |-- create-equipment.dto.ts
|   |-- entities/
|       |-- equipment.entity.ts
|   |-- equipment.controller.ts
|   |-- equipment.module.ts
|   |-- equipment.service.ts
|-- app.module.ts
|-- main.ts
```

## Installation

```bash
$ npm install
```

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

## Documentation
- This project use swagger to document API
- class-validator to validate fields
- docker & docker-compose
- TypeORM with postgres

## License

Nest is [MIT licensed](LICENSE).
