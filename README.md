# parcel-starter
Parcel JS quick starter project with GitHub Pages Actions for JS PoC quick start prototyping

## Getting started / bun

Install bun:

```bash
curl -fsSL https://bun.sh/install | bash
bun -v # 1.0.21
bunx degit daggerok/parcel-starter my-app
```

## Development

install packages:

```bash
bun i -E
```

run server in dev mode listening port 1234:

```bash
bun serve
```

run tests:

```bash
bun test
```

run tests in watch mode:

```bash
bun dev
```

build and run locally listening port 3000:

```bash
bun run build ; bunx serve dist
```

## Deployment

To deploy GitHub repository settings you must update `Pages` section:
Build and deployment:
`Source` -> `Deploy from branch`
`Branch` -> `gh-pages / (root)`
