# tRPC API Boilerplate ![Heisenberg](https://raw.githubusercontent.com/mkosir/trpc-fe-boilerplate-vite/main/misc/heisenberg_75.png)

[![CI][ci-badge]][ci-url]

Minimal [tRPC](https://trpc.io/) API boilerplate for separate BE-FE repositories. Easily publish fully typesafe APIs that any frontend can consume.

Monorepos are great, but sometimes we are targeting backend and frontend as separate (mono)repositories.

We might aim for backend and frontend repositories separation of:

- domain/business logic - expose only what need to be exposed through API.
- developers - larger teams/companies.
- CI/CD pipelines, PRs, issues, etc.

... in that case checkout this boilerplate.

## Running locally

_Easily set up a local development environment_

- clone repo
- `npm install`
- `npm run dev`
- make changes to tRPC API & push - new [package](https://www.npmjs.com/package/trpc-api-boilerplate) is released 📦 [![npm version][npm-badge]][npm-url]

Use repository to share types by running `npm run trpc-api-export` and push code changes.  
In your [frontend app](https://github.com/mkosir/trpc-fe-boilerplate-vite/blob/main/package.json#L7) consume types by running `npm run trpc-api-import`.

## Database Setup

Before this step, copy the env.example file content into .env file and make changes to these environment variables
Set up Docker container for PostgresSQL database and PgAdmin for monitoring database

```shell
npm run ecosystem:up
```

## Database migrating and seeding

Run these command to generate database, migrate schema and seed mock data

```shell
npm run db:generate
npm run db:migrate
npm run db:seed
```
