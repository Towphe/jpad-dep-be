# JPAD Backend Deployment Practice Project

A pracitce project for deploying backend applications in Vercel.

## Setup

1. Clone the repository

```bash
$ git clone https://github.com/Towphe/jpad-dep-be
```

2. In terminal, o to directory of repository

```bash
$ mv jpad-dep-be/
```

3. Install dependencies

```bash
$ npm ci
```

4. Add necessary environment variables

Follow the dedicated section on environment variables below.

5. Run application

```bash
$ docker compose up --build
```

6. Instantiate DB

```bash
$ npx prisma migrate dev
```

## Environment Variables

Setup the environment variables as follows:

1. Create `.env` from example environment file

```bash
$ cp .env.example .env
$
```

2. Fillup `.env` with necessary values.

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
DATABASE_URL=

```
