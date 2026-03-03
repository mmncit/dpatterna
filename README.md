# dpatterna

Design patterns are well-known solutions to recurring problems. This repo holds some of the classical introductory exercises for different design patterns.

## Tech Stack

- **Framework:** [Svelte 5](https://svelte.dev/) (runes mode)
- **Build Tool:** [Vite](https://vite.dev/)
- **Language:** TypeScript
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Testing:** Jest (unit), Playwright (e2e)
- **Deployment:** GitHub Pages

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Running the web app

```bash
pnpm start
```

Opens the dev server at [http://localhost:9000](http://localhost:9000).

### Running the test suite

```bash
pnpm test        # run all unit tests with coverage
pnpm test:dev    # run tests in verbose/watch mode
```

### Running e2e tests

```bash
pnpm playwright test
```

### Build for production

```bash
pnpm build       # outputs to dist/
pnpm preview     # preview the production build
```

### Deploy to GitHub Pages

```bash
pnpm deploy
```

### Execute a script with `ts-node`

```bash
pnpm ts-node <file_path>
# e.g. pnpm ts-node src/functional/closure/adjectifier.ts
```

## For `py` files (Python >= 3)

```sh
python3 <file_path>
```
