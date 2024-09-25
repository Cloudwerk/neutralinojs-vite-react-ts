# Neutralinojs + Vite + React + Typescript
A simple [React](https://react.dev/) template for building [Neutralinojs](https://neutralino.js.org/) apps with [Vite](https://vitejs.dev/) as bundler and [Typescript](https://www.typescriptlang.org/)

## How to set up
### Prerequisites
All prerequisites of Neutralino, Vite, React and Typescript apply. You should have Neutralinojs CLI installed.
### Setup with Neutralino CLI
Create a new Neutralinojs project with this template with the following command:
1. `neu create myapp --template Cloudwerk/neutralinojs-vite-react-ts`
2. `cd myapp`
3. Create a `.env` file with the content `VITE_GLOBAL_URL=http://localhost:3000/`
### Manual Setup (with Neutralino CLI)
1. Clone this repository
2. Adjust the `modes.window.title` and `cli.binaryName` to your desired Application Name inside the `neutralino.config.json` file
3. Open a Terminal inside the repos root
4. run `neu update`
5. run `cd vite-src`
6. Adjust the `name` property to your desired Application Name inside the `package.json` file
7. run `npm install`

## Known Issues
- When running the dev server with `neu run`, it spams the Terminal with `neu: INFO Global variables patch was reverted`

## How to develop

Start the React development server and Neutralinojs app:

```bash
neu run
```

## How to bundle the app

Trigger a new React build and create the application bundle with the following command:
```bash
neu build
```

## License

[MIT](LICENSE)
