# Restaurant Finder

A simple AI-powered restaurant finder from any query. Uses Gemini to translate human query into a JSON command. Leverages FourSquares Places API (*v2025-02-05*) for searching places.

## Setup

1. Clone the repository

```bash
$ git clone https://github.com/Towphe/restaurant-finder
```

2. In terminal, o to directory of repository
```bash
$ mv restaurant-finder/
```

3. Install dependencies
```bash
$ npm ci
```

4. Add necessary environment variables

Follow the dedicated section on environment variables below.

5. Run application
```bash
$ npm run dev
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
PORT=
NODE_ENV=
LLM_MODEL=
GEMINI_API_KEY=
```

## Limitations

The application only uses v2025-02-05 Place Search API from FourSquares. Other endpoints such as `Get Place Details` and `Get Place Tips` were not used.

