# parcel-starter
Parcel JS quick starter project with GitHub Pages Actions for JS PoC quick start prototyping

## Getting started

```bash
npm_config_yes=true npx degit daggerok/parcel-starter my-app
```

## Development

install packages:

```bash
npm i -E
```

run server in dev mode listening port 1234:

```bash
npm run serve
```

run tests:

```bash
npm t
```

run tests in watch mode:

```bash
npm run dev
```

build and run locally listening port 3000:

```bash
npm run build ; npm_config_yes=true npx serve dist
```

## Deployment

To deploy GitHub repository settings you must update `Pages` section:
Build and deployment:
`Source` -> `Deploy from branch`
`Branch` -> `gh-pages / (root)`
