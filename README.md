<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">NestJs is a progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

## Description

Equipment Tracking API was built with [Nest](https://github.com/nestjs/nest) framework TypeScript.

## Documentation
- This project use swagger to document API
- class-validator to validate fields
- docker & docker-compose
- TypeORM with postgres
- Coverage 90%
- Health Check (for loadbalancer or kubernentes)

## Installation

```bash
# copy envs
$ cp .env-example .env

# generate secret to jwt (update your .env)
$ openssl rand -hex 32

# install dependencies
$ npm install

```

## Running the app

```bash
# How to run without docker.
# You can just use the database in docker: 
# docker-compose up postgres -d

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

######### With Docker #########
$ docker-compose up -d

# Just open your browser to:
http://localhost:3000/swagger
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

## License

Nest is [MIT licensed](LICENSE).
