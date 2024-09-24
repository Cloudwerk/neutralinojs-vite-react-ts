# Neutralinojs + Vite + React + Typescript
A simple React template for building Neutralinojs apps with Vite as bundler and typescript

## How to install
Create a new Neutralinojs project with this template with the following command:
1. `neu create myapp --template Cloudwerk/neutralinojs-vite-react-ts`
2. `cd myapp`
3. `npm install`
4. Create a `.env` file with the content `VITE_GLOBAL_URL=http://localhost:3000/`

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
